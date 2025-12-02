import React from 'react';

export function Card({ className = '', children, ...props }) {
  return (
    <div className={`card${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className = '', children, ...props }) {
  return (
    <div className={`card__content${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </div>
  );
}
