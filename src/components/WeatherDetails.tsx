import { motion } from 'framer-motion';
import { WeatherData } from '@/types/weather';

interface WeatherDetailsProps {
  weather: WeatherData;
}

export function WeatherDetails({ weather }: WeatherDetailsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
      >
        <p className="text-sm text-white/70">Sensação térmica</p>
        <p className="text-xl font-semibold">{Math.round(weather.main.feels_like)}°C</p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
      >
        <p className="text-sm text-white/70">Umidade</p>
        <p className="text-xl font-semibold">{weather.main.humidity}%</p>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
      >
        <p className="text-sm text-white/70">Vento</p>
        <p className="text-xl font-semibold">{weather.wind.speed} m/s</p>
      </motion.div>
    </div>
  );
} 