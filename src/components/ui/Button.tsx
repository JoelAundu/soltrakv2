import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0';

  const variants = {
    primary: 'bg-[#1768a1] text-white hover:bg-[#1E81C6] hover:shadow-lg',
    outline: 'border-2 border-[#1768a1] text-[#1768a1] hover:bg-[#1768a1] hover:text-white',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-[#0a1628]',
    ghost: 'text-[#1768a1] hover:bg-[#1768a1]/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
