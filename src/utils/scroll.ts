export function scrollToElement(elementId: string, offset = 80): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function getActiveSection(sectionIds: string[], offset = 100): string | null {
  const scrollPosition = window.scrollY + offset;

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const section = document.getElementById(sectionIds[i]);
    if (section && section.offsetTop <= scrollPosition) {
      return sectionIds[i];
    }
  }

  return sectionIds[0] || null;
}
