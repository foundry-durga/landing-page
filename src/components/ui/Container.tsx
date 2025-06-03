import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-[2000px] ${className}`}>
      {children}
    </div>
  );
}