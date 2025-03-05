'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { WeatherData, ForecastData } from '@/types/weather';
import { getBackgroundGradient } from '@/utils/weather';
import { SearchBar } from '@/components/SearchBar';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { WeatherCard } from '@/components/WeatherCard';
import { WeatherDetails } from '@/components/WeatherDetails';
import { Forecast } from '@/components/Forecast';

export default function Home() {
  const [city, setCity] = useState('São Paulo');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
          fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
          setError('Não foi possível obter sua localização. Por favor, digite o nome da sua cidade.');
          fetchWeather();
        }
      );
    } else {
      setError('Seu navegador não suporta geolocalização. Por favor, digite o nome da sua cidade.');
      fetchWeather();
    }
  };

  const fetchWeatherByCoords = async (lat: number, lon: number) => {
    try {
      setLoading(true);
      setError('');
      
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key não encontrada');
      }

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;
      const weatherResponse = await axios.get(weatherUrl);
      setWeather(weatherResponse.data);
      setCity(weatherResponse.data.name);

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;
      const forecastResponse = await axios.get(forecastUrl);
      setForecast(forecastResponse.data);
    } catch (err) {
      console.error('Erro ao buscar clima:', err);
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError('Ops! Parece que estamos com um problema técnico. Por favor, tente novamente mais tarde.');
        } else if (err.response?.status === 404) {
          setError('Não encontramos essa cidade. Verifique se o nome está correto e tente novamente.');
        } else {
          setError('Algo deu errado ao buscar o clima. Por favor, tente novamente.');
        }
      } else {
        setError('Não foi possível buscar o clima no momento. Por favor, tente novamente.');
      }
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError('');
      
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key não encontrada');
      }

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
      const weatherResponse = await axios.get(weatherUrl);
      setWeather(weatherResponse.data);

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
      const forecastResponse = await axios.get(forecastUrl);
      setForecast(forecastResponse.data);
    } catch (err) {
      console.error('Erro ao buscar clima:', err);
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError('Ops! Parece que estamos com um problema técnico. Por favor, tente novamente mais tarde.');
        } else if (err.response?.status === 404) {
          setError('Não encontramos essa cidade. Verifique se o nome está correto e tente novamente.');
        } else {
          setError('Algo deu errado ao buscar o clima. Por favor, tente novamente.');
        }
      } else {
        setError('Não foi possível buscar o clima no momento. Por favor, tente novamente.');
      }
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen bg-gradient-to-b ${getBackgroundGradient(weather)} text-white transition-colors duration-1000`}
    >
      <div className="container mx-auto px-4 py-8">
        <SearchBar
          city={city}
          onCityChange={setCity}
          onSubmit={handleSubmit}
          onLocationClick={(e) => {
            e.preventDefault();
            getLocation();
          }}
        />

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : weather ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPinIcon className="w-5 h-5" />
                  <h1 className="text-4xl font-bold">{weather.name}</h1>
                </div>
                <p className="text-xl text-white/80">
                  {format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR })}
                </p>
              </div>

              <WeatherCard weather={weather} />
              <WeatherDetails weather={weather} />
              {forecast && <Forecast forecast={forecast} />}
            </motion.div>
          </AnimatePresence>
        ) : null}
      </div>
    </motion.main>
  );
}
