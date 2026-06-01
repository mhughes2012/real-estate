'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { Button } from '@/components/atoms/Button';

interface FavoriteButtonProps {
  propertyId: string;
  className?: string;
  variant?: 'outline' | 'ghost' | 'primary' | 'secondary';
  showLabel?: boolean;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  propertyId, 
  className = "", 
  variant = "outline",
  showLabel = false
}) => {
  const { isFavorite, toggleFavorite, isInitialized } = useFavorites();
  
  const active = isInitialized && isFavorite(propertyId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(propertyId);
  };

  return (
    <Button
      variant={variant === 'ghost' ? 'outline' : variant}
      size="sm"
      className={`rounded-full transition-all duration-300 ${
        active 
          ? 'bg-red-500 border-red-500 text-white hover:bg-red-600 hover:border-red-600' 
          : variant === 'outline' 
            ? 'bg-white/80 backdrop-blur-sm border-white-muted text-navy hover:text-red-500' 
            : ''
      } ${className}`}
      onClick={handleClick}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart 
        size={20} 
        fill={active ? "currentColor" : "none"} 
        className={active ? "scale-110" : "hover:scale-110 transition-transform"}
      />
      {showLabel && <span className="ml-2">{active ? 'Saved' : 'Save'}</span>}
    </Button>
  );
};
