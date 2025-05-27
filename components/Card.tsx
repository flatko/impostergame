
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, className, title }) => {
  return (
    <div className={`bg-[var(--color-brand-card)] shadow-xl rounded-xl p-6 md:p-8 ${className || ''}`}>
      {title && <h2 className="text-2xl font-bold text-[var(--color-brand-primary)] mb-6 text-center">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;