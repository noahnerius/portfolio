import { type HTMLAttributes, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className = '', children, ariaLabel, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </section>
  )
);

Section.displayName = 'Section';

export const SectionHeader = ({
  title,
  subtitle,
  children,
  className = '',
  align = 'center',
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}) => (
  <header
    className={`mb-12 ${align === 'center' ? 'mx-auto max-w-3xl text-center' : align === 'right' ? 'ml-auto max-w-3xl text-right' : 'max-w-3xl'} ${className}`}
  >
    <h2 className="mb-4 text-display-md font-bold text-text">{title}</h2>
    {subtitle && <p className="text-body-lg text-text-muted">{subtitle}</p>}
    {children}
  </header>
);
