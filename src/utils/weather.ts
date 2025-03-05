import { WeatherData } from '@/types/weather';

export const getBackgroundGradient = (weather: WeatherData | null) => {
  if (!weather) return 'from-blue-500 to-blue-700';

  const hour = new Date().getHours();
  const isNight = hour >= 18 || hour < 6;
  const isDawn = hour >= 6 && hour < 8;
  const isDusk = hour >= 16 && hour < 18;

  const weatherMain = weather.weather[0].main.toLowerCase();

  if (weatherMain.includes('rain') || weatherMain.includes('drizzle')) {
    return isNight ? 'from-gray-800 to-gray-900' :
           isDawn || isDusk ? 'from-gray-600 to-gray-800' :
           'from-gray-500 to-gray-700';
  } else if (weatherMain.includes('snow')) {
    return isNight ? 'from-slate-800 to-slate-900' :
           isDawn || isDusk ? 'from-slate-600 to-slate-800' :
           'from-slate-400 to-slate-600';
  } else if (weatherMain.includes('thunderstorm')) {
    return isNight ? 'from-purple-900 to-black' :
           isDawn || isDusk ? 'from-purple-800 to-gray-900' :
           'from-purple-700 to-gray-800';
  } else if (weatherMain.includes('cloud')) {
    return isNight ? 'from-gray-700 to-gray-900' :
           isDawn || isDusk ? 'from-gray-500 to-gray-700' :
           'from-gray-400 to-gray-600';
  } else {
    return isNight ? 'from-blue-900 to-black' :
           isDawn ? 'from-orange-300 to-blue-400' :
           isDusk ? 'from-orange-400 to-blue-600' :
           'from-blue-400 to-blue-600';
  }
}; 