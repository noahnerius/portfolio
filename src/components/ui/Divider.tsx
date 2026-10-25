import { type HTMLAttributes, forwardRef } from 'react';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  length?: 'full' | 'half' | 'quarter';
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', length = 'full', className = '', ...props }, ref) => {
    const orientationStyles = {
      horizontal: 'w-full h-px',
      vertical: 'h-full w-px',
    };

    const lengthStyles = {
      full: 'w-full',
      half: 'w-1/2',
      quarter: 'w-1/4',
    };

    return (
      <hr
        ref={ref}
        className={`${orientationStyles[orientation]} bg-border ${orientation === 'horizontal' ? lengthStyles[length] : ''} ${className}`}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
