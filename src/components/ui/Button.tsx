import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  isExternal?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  href,
  isExternal = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`w-5 h-5 ${children ? 'mr-2' : ''}`} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`w-5 h-5 ${children ? 'ml-2' : ''}`} />
      )}
    </>
  );
  
  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;