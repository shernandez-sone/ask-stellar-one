import React from 'react';

export function Badge({ variant = 'neutral', children, className = '', ...props }) {
  const toneClass = {
    success: 'badge--success',
    info: 'badge--info',
    neutral: 'badge--neutral',
  }[variant];

  return (
    <span className={`badge ${toneClass}${className ? ` ${className}` : ''}`} {...props}>
      {children}
    </span>
  );
}
