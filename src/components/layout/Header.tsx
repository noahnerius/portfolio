import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { linkButtonStyles } from '@/components/ui/linkButtonStyles';
import { profile } from '@/data/profile';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Divider } from '@/components/ui/Divider';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle('light', !initialDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('light', !newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-normal ${
        isScrolled ? 'border-b border-border bg-background/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="hero"
            smooth={!prefersReducedMotion}
            duration={500}
            offset={-80}
            spy={true}
            className="flex items-center gap-2 rounded text-heading-sm font-semibold text-text transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={closeMenu}
          >
            <span className="text-primary">NN</span>
            <span className="hidden sm:block">Noah Nerius P</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={!prefersReducedMotion}
                duration={500}
                offset={-80}
                spy={true}
                className="rounded text-body-sm font-medium text-text-muted transition-colors duration-fast hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-text-muted transition-colors duration-fast hover:bg-surface-elevated hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDark}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a href={profile.resumePath} download className={linkButtonStyles('primary', 'md')}>
              Resume
            </a>
          </div>

          <button
            className="rounded-lg p-2 text-text transition-colors hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-normal md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="space-y-3 border-t border-border py-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={!prefersReducedMotion}
                duration={500}
                offset={-80}
                spy={true}
                className="block rounded px-2 py-2 text-body font-medium text-text-muted transition-colors hover:text-text"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Divider className="my-3" />
            <div className="flex items-center justify-between px-2">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-body font-medium text-text-muted transition-colors hover:text-text"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                <span>{isDark ? 'Light' : 'Dark'} Mode</span>
              </button>
            </div>
            <div className="flex items-center gap-4 px-2 pt-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 text-text-muted transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <a
              href={profile.resumePath}
              download
              className={
                linkButtonStyles('primary', 'md') +
                ' mx-2 mt-2 block w-[calc(100%-1rem)] text-center'
              }
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
