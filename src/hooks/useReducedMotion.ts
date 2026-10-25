export function useReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
}

export function useReducedMotionEffect(): boolean {
  // This hook is for components that need to react to changes
  // For simple checks, use the synchronous version above
  if (typeof window === 'undefined') return false;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
}
