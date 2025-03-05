import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clima - Previsão do Tempo',
  description: 'Aplicativo de previsão do tempo com interface moderna e responsiva',
  keywords: ['clima', 'previsão do tempo', 'tempo', 'weather', 'forecast'],
  openGraph: {
    title: 'Clima - Previsão do Tempo',
    description: 'Aplicativo de previsão do tempo com interface moderna e responsiva',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function WeatherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 