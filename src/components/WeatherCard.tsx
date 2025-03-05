import { motion } from 'framer-motion';
import { WeatherData } from '@/types/weather';
import { WeatherIcon } from './WeatherIcon';

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8"
    >
      <div className="flex items-center justify-center mb-6">
        <WeatherIcon 
          icon={weather.weather[0].icon}
          size={128}
          className="text-white"
        />
      </div>
      <div className="text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-6xl font-bold mb-2"
        >
          {Math.round(weather.main.temp)}°C
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl capitalize"
        >
          {weather.weather[0].description}
        </motion.p>
      </div>
    </motion.div>
  );
} 