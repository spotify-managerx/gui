import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  children: ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  icon,
  children,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-bold rounded-lg transition-all flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-spotify-green text-black hover:bg-[#1fdf64] shadow-lg shadow-spotify-green/20',
    secondary: 'bg-[#282828] text-white hover:bg-[#333] border border-[#333]',
    danger: 'bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400',
    ghost: 'text-[#b3b3b3] hover:text-white hover:bg-[#1a1a1a]',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
