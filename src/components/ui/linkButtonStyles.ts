// Styles for anchor tags that look like buttons
export const linkButtonStyles = (
  variant: 'primary' | 'secondary' | 'ghost' | 'link' = 'primary',
  size: 'sm' | 'md' | 'lg' = 'md'
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

  return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;
};
