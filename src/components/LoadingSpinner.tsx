export function LoadingSpinner() {
  return (
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-white/20 border-t-white mb-2"></div>
      <p>Buscando informações do clima...</p>
    </div>
  );
} 