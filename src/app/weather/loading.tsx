import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <LoadingSpinner />
      </div>
    </div>
  );
} 