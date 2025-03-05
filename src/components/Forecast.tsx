import { motion } from 'framer-motion';
import { format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ForecastData } from '@/types/weather';
import { WeatherIcon } from './WeatherIcon';

interface ForecastProps {
  forecast: ForecastData;
}

export function Forecast({ forecast }: ForecastProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.6 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
    >
      <h3 className="text-xl font-semibold mb-4">Próximos 5 dias</h3>
      <div className="grid grid-cols-5 gap-4">
        {forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5).map((day, index) => (
          <motion.div
            key={day.dt}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8 + index * 0.2 }}
            className="text-center"
          >
            <p className="text-sm text-white/70 mb-2">
              {format(addDays(new Date(), index), "EEE", { locale: ptBR })}
            </p>
            <div className="flex justify-center mb-2">
              <WeatherIcon 
                icon={day.weather[0].icon}
                size={48}
                className="text-white"
              />
            </div>
            <p className="text-lg font-semibold">
              {Math.round(day.main.temp)}°C
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 