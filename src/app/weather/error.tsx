'use client';

import { useEffect } from 'react';
import { ErrorMessage } from '@/components/ErrorMessage';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Erro na aplicação:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <ErrorMessage 
          message="Ops! Algo deu errado. Por favor, tente novamente."
        />
        <div className="text-center mt-4">
          <button
            onClick={reset}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    </div>
  );
} 