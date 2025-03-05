import { motion } from 'framer-motion';
import {
  WiDaySunny,
  WiNightClear,
  WiCloudy,
  WiRain,
  WiFog,
  WiDayCloudy,
  WiNightAltCloudy,
  WiDayRain,
  WiNightAltRain,
  WiDaySnow,
  WiNightAltSnow,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
} from 'react-icons/wi';

interface WeatherIconProps {
  icon: string;
  size?: number;
  className?: string;
}

export function WeatherIcon({
  icon,
  size = 128,
  className = '',
}: WeatherIconProps) {
  const getIcon = () => {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;

    switch (icon) {
      case '01d':
        return <WiDaySunny size={size} className={className} />;
      case '01n':
        return <WiNightClear size={size} className={className} />;
      case '02d':
        return <WiDayCloudy size={size} className={className} />;
      case '02n':
        return <WiNightAltCloudy size={size} className={className} />;
      case '03d':
      case '03n':
        return <WiCloudy size={size} className={className} />;
      case '04d':
      case '04n':
        return <WiCloudy size={size} className={className} />;
      case '09d':
      case '09n':
        return <WiRain size={size} className={className} />;
      case '10d':
        return <WiDayRain size={size} className={className} />;
      case '10n':
        return <WiNightAltRain size={size} className={className} />;
      case '11d':
        return <WiDayThunderstorm size={size} className={className} />;
      case '11n':
        return <WiNightAltThunderstorm size={size} className={className} />;
      case '13d':
        return <WiDaySnow size={size} className={className} />;
      case '13n':
        return <WiNightAltSnow size={size} className={className} />;
      case '50d':
      case '50n':
        return <WiFog size={size} className={className} />;
      default:
        return isNight ? (
          <WiNightClear size={size} className={className} />
        ) : (
          <WiDaySunny size={size} className={className} />
        );
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.4 }}
      className="flex items-center justify-center"
    >
      {getIcon()}
    </motion.div>
  );
}
