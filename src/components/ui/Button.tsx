import { forwardRef, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary: 'bg-primary text-background hover:bg-primary-hover active:bg-primary-focus',
      secondary:
        'bg-surface-elevated text-text border border-border hover:bg-surface-elevated/80 hover:border-border-strong active:bg-surface-elevated',
      ghost: 'bg-transparent text-text hover:bg-surface-elevated active:bg-surface-elevated',
      link: 'bg-transparent text-primary hover:text-primary-hover p-0',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-body-sm',
      md: 'px-6 py-3 text-body-sm',
      lg: 'px-8 py-4 text-body',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={disabled ?? loading}
        {...props}
      >
        {loading && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <circle
              className="opacity-75"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray="30"
              strokeDashoffset="10"
              strokeLinecap="round"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
