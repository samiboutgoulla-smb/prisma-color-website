import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface ProductImageProps {
  product: Product;
  className?: string;
  containerClassName?: string;
  style?: React.CSSProperties;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  className = '',
  containerClassName = '',
  style
}) => {
  const [hasError, setHasError] = useState(false);

  // Reset error state if product changes
  useEffect(() => {
    setHasError(false);
  }, [product.id, product.image]);

  // Determine label gradient colors based on subcategory & category
  const getGradientColors = () => {
    const sub = product.subCategory ? product.subCategory.toUpperCase() : 'DEFAULT';
    const cat = product.category;

    if (cat === 'decor' || sub === 'DÉCO') {
      return { start: '#b45309', end: '#f59e0b' }; // Traditional elegant gold/ochre
    }
    
    if (cat === 'exterior') {
      if (sub === 'SOLUTIONS') {
        return { start: '#1e3a8a', end: '#3b82f6' }; // Heavy duty blue
      }
      return { start: '#c2410c', end: '#ea580c' }; // Moroccan Terracotta
    }

    switch (sub) {
      case 'IMPRESSION':
        return { start: '#0369a1', end: '#0ea5e9' }; // Clean primary blue
      case 'ENDUIT':
        return { start: '#4b5563', end: '#9ca3af' }; // Plaster stone grey
      case 'VERNIS':
        return { start: '#7c2d12', end: '#ea580c' }; // Lustrous wood warm orange
      case 'HYGIÈNE':
        return { start: '#047857', end: '#10b981' }; // Clean antiseptic green
      case 'ACRYLIQUE':
        return { start: '#6d28d9', end: '#a78bfa' }; // Premium satin purple
      case 'SOLUTIONS':
      default:
        return { start: '#0f766e', end: '#14b8a6' }; // Lagoon teal
    }
  };

  const colors = getGradientColors();
  const gradId = `label-grad-${product.id}`;

  if (hasError || !product.image) {
    return (
      <div 
        className={`flex items-center justify-center w-full h-full p-4 pointer-events-none select-none ${containerClassName}`}
        style={style}
      >
        <svg 
          viewBox="0 0 200 220" 
          className={`w-auto h-full max-h-full drop-shadow-lg ${className}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wire Handle */}
          <path 
            d="M 35 95 A 65 65 0 0 1 165 95" 
            fill="none" 
            stroke="#9ca3af" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            opacity="0.7"
          />
          
          {/* Metal handle attachments */}
          <circle cx="33" cy="95" r="3.5" fill="#4b5563" />
          <circle cx="167" cy="95" r="3.5" fill="#4b5563" />

          {/* Lid Lid-depth */}
          <ellipse cx="100" cy="55" rx="63" ry="12" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1" />
          <ellipse cx="100" cy="53" rx="63" ry="12" fill="#e5e7eb" />
          <ellipse cx="100" cy="51" rx="53" ry="9" fill="#f3f4f6" />
          
          {/* Can Body with metallic shading */}
          <path 
            d="M 37 55 Q 100 67 163 55 L 153 185 Q 100 197 47 185 Z" 
            fill={`url(#metallicGradient-${product.id})`} 
            stroke="#9ca3af" 
            strokeWidth="1.2" 
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id={`metallicGradient-${product.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9ca3af" />
              <stop offset="15%" stopColor="#d1d5db" />
              <stop offset="35%" stopColor="#f3f4f6" />
              <stop offset="55%" stopColor="#e5e7eb" />
              <stop offset="85%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#7c8088" />
            </linearGradient>
            
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.start} />
              <stop offset="100%" stopColor={colors.end} />
            </linearGradient>
          </defs>
          
          {/* Color band (The dynamic label) */}
          <path 
            d="M 40 85 Q 100 97 160 85 L 155 158 Q 100 170 45 158 Z" 
            fill={`url(#${gradId})`} 
          />
          
          {/* Label highlight texture */}
          <path 
            d="M 40 115 Q 100 128 160 115 L 155 158 Q 100 170 45 158 Z" 
            fill="#ffffff" 
            fillOpacity="0.08" 
          />
          
          {/* PRISMA Logo Text */}
          <text 
            x="100" 
            y="105" 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="9" 
            fontWeight="bold" 
            fontFamily="monospace" 
            letterSpacing="2.5"
            opacity="0.9"
          >
            PRISMA
          </text>
          
          {/* Product Name (large, polished) */}
          <text 
            x="100" 
            y="126" 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="10.5" 
            fontWeight="800" 
            fontFamily="sans-serif"
            letterSpacing="0.2"
          >
            {product.name.toUpperCase()}
          </text>
          
          {/* Secondary tag/subline */}
          <text 
            x="100" 
            y="142" 
            textAnchor="middle" 
            fill="#f3f4f6" 
            fontSize="7" 
            fontWeight="500" 
            fontFamily="sans-serif"
            opacity="0.85"
          >
            {product.tag}
          </text>

          {/* Bottom rim highlight */}
          <path 
            d="M 47 185 Q 100 197 153 185" 
            fill="none" 
            stroke="#9ca3af" 
            strokeWidth="1.2" 
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={`${import.meta.env.BASE_URL}${product.image.replace(/^\//, '')}`}
      alt={product.name}
      referrerPolicy="no-referrer"
      className={className}
      style={style}
      onError={() => setHasError(true)}
    />
  );
};