import Link from 'next/link';
import { ErrorMessage } from '@/components/ErrorMessage';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <ErrorMessage 
          message="Página não encontrada. Volte para a página inicial."
        />
        <div className="text-center mt-4">
          <Link
            href="/"
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors inline-block"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
} 