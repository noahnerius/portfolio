import { type HTMLAttributes, forwardRef } from 'react';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'outline' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ children, variant = 'default', size = 'md', className = '', ...props }, ref) => {
    const variantStyles = {
      default: 'bg-surface-elevated border border-border text-text-muted',
      primary: 'bg-primary/15 border-primary/30 text-primary',
      outline: 'bg-transparent border-border-strong text-text',
      success: 'bg-green-500/15 border-green-500/30 text-green-400',
      warning: 'bg-amber-500/15 border-amber-500/30 text-amber-400',
      error: 'bg-red-500/15 border-red-500/30 text-red-400',
    };

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-caption',
      md: 'px-3 py-1 text-caption',
    };

    return (
      <span
        ref={ref}
        className={`inline-flex items-center rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Tag.displayName = 'Tag';
