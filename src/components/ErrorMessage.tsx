import { motion } from 'framer-motion';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto"
    >
      <p className="text-lg mb-2">{message}</p>
      <p className="text-sm text-white/70">
        Dica: Tente usar o nome da cidade em português ou inglês
      </p>
    </motion.div>
  );
} 