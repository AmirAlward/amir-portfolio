// src/components/ui/Button.tsx
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ElementType;
  className?: string;
}

export const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium text-sm transition-all';
  const variantClasses = {
    primary: 'bg-[#0A66C2] text-white hover:bg-[#0958aa] focus:ring-2 focus:ring-[#0A66C2]/30',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200 focus:ring-2 focus:ring-gray-300',
    outline: 'border border-gray-300 text-black hover:bg-gray-50 focus:ring-2 focus:ring-gray-300',
  };

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" aria-hidden="true" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {content}
    </button>
  );
};