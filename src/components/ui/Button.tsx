import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
    ghost: 'btn-ghost',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-6 py-3',
    md: 'text-base px-8 py-4',
    lg: 'text-lg px-10 py-5',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`w-5 h-5 ${children ? 'mr-2' : ''} transition-transform duration-300 group-hover:scale-110`} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`w-5 h-5 ${children ? 'ml-2' : ''} transition-transform duration-300 group-hover:translate-x-1`} />
      )}
    </>
  );
  
  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={`${classes} group`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    
    return (
      <Link to={href} className={`${classes} group`}>
        {content}
      </Link>
    );
  }
  
  return (
    <button className={`${classes} group`} {...props}>
      {content}
    </button>
  );
};

export default Button;