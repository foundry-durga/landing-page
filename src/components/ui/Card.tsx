import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
}

export function Card({ children, className = '', glassEffect = false }: CardProps) {
  return (
    <div 
      className={`
        rounded-2xl p-4 md:p-6
        ${glassEffect 
          ? 'bg-white/80 backdrop-blur-md border border-white/20 shadow-xl' 
          : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md'}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-lg md:text-xl font-bold mb-2 ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}