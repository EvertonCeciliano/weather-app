import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  city: string;
  onCityChange: (city: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onLocationClick: (e: React.MouseEvent) => void;
}

export function SearchBar({ city, onCityChange, onSubmit, onLocationClick }: SearchBarProps) {
  return (
    <form onSubmit={onSubmit} className="flex justify-center mb-8">
      <div className="relative w-full max-w-md flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            className="w-full px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="Digite o nome da cidade"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLocationClick}
          className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center"
          title="Usar minha localização"
        >
          <MapPinIcon className="w-5 h-5" />
        </motion.button>
      </div>
    </form>
  );
} 