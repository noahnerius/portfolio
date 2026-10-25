import { forwardRef, type HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', padding = 'md', className = '', ...props }, ref) => {
    const variantStyles = {
      default:
        'bg-surface border border-border rounded-xl transition-all duration-normal hover:border-border-strong hover:shadow-lg',
      interactive:
        'bg-surface border border-border rounded-xl cursor-pointer transition-all duration-normal hover:border-border-strong hover:shadow-xl hover:-translate-y-1',
      elevated: 'bg-surface-elevated border border-border rounded-xl shadow-lg',
    };

    const paddingStyles = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    return (
      <div
        ref={ref}
        className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className = '', ...props }, ref) => (
    <h3 ref={ref} className={`text-heading-sm font-semibold text-text ${className}`} {...props}>
      {children}
    </h3>
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ children, className = '', ...props }, ref) => (
  <p ref={ref} className={`mt-1 text-body-sm text-text-muted ${className}`} {...props}>
    {children}
  </p>
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={`mt-4 border-t border-border pt-4 ${className}`} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';
