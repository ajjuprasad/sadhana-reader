import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../hooks/useFavorites';

interface FavoriteButtonProps {
  stotraId: string;
  size?: number;
  className?: string;
}

export default function FavoriteButton({ stotraId, size = 22, className = '' }: FavoriteButtonProps) {
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const navigate = useNavigate();
  const active = isFavorite(stotraId);

  return (
    <motion.button
      className={`p-2 hover:opacity-70 transition-opacity ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        if (!user) {
          navigate('/profile');
          return;
        }
        toggleFavorite(stotraId);
      }}
      whileTap={{ scale: 0.8 }}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={active ? 'var(--color-accent-primary)' : 'none'}
        stroke={active ? 'var(--color-accent-primary)' : 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </motion.button>
  );
}
