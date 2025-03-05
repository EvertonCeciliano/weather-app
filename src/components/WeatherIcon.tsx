import { WiDaySunny, WiCloudy, WiRain, WiFog } from 'react-icons/wi';

interface WeatherIconProps {
  weather: string;
  size?: number;
}

export function WeatherIcon({ weather, size = 24 }: WeatherIconProps) {
  const weatherLower = weather.toLowerCase();

  if (weatherLower.includes('clear')) {
    return <WiDaySunny size={size} />;
  } else if (weatherLower.includes('cloud')) {
    return <WiCloudy size={size} />;
  } else if (weatherLower.includes('rain')) {
    return <WiRain size={size} />;
  } else if (weatherLower.includes('fog') || weatherLower.includes('mist')) {
    return <WiFog size={size} />;
  }

  return <WiDaySunny size={size} />;
} 