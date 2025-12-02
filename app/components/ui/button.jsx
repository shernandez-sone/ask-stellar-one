import React from 'react';

export function Button({ variant = 'primary', href, className = '', children, ...props }) {
  const toneClass = variant === 'secondary' ? 'btn--secondary' : 'btn--primary';
  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={`btn ${toneClass}${className ? ` ${className}` : ''}`}
      href={href}
      {...(!href && { type: 'button' })}
      {...props}
    >
      {children}
    </Component>
  );
}
