import React from 'react';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  children,
  className = '',
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block text-center';

  const variantStyles = {
    primary: 'bg-theme-primary text-theme-text-inverse hover:bg-theme-primary-hover',
    secondary: 'bg-sand-800 text-theme-text-inverse hover:bg-sand-900',
    outline: 'border-2 border-theme-primary text-theme-primary hover:bg-theme-background-sand',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles}>
      {children}
    </button>
  );
};
