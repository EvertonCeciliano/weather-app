import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key não encontrada' },
        { status: 500 }
      );
    }

    let weatherUrl;
    if (lat && lon) {
      weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`;
    } else if (city) {
      weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
    } else {
      return NextResponse.json(
        { error: 'Cidade ou coordenadas não fornecidas' },
        { status: 400 }
      );
    }

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    if (!weatherResponse.ok) {
      return NextResponse.json(
        { error: weatherData.message || 'Erro ao buscar clima' },
        { status: weatherResponse.status }
      );
    }

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${apiKey}&units=metric&lang=pt_br`;
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    return NextResponse.json({
      weather: weatherData,
      forecast: forecastData
    });
  } catch (error) {
    console.error('Erro ao buscar clima:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 