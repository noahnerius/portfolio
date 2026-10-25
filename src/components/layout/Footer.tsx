import { Github, Linkedin, Mail, Twitter, Heart, Code } from 'lucide-react';
import { profile } from '@/data/profile';
import { Container } from '@/components/ui/Container';
import { Divider } from '@/components/ui/Divider';
import { PressScale, HoverLift } from '@/components/animations/MotionPrimitives';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50" role="contentinfo">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-2 text-heading-sm font-semibold text-text">
                <span className="text-primary">NN</span>
                <span>Noah Nerius P</span>
              </div>
              <p className="mb-6 max-w-xs text-body text-text-muted">
                AI/ML Engineer building intelligent systems that solve real-world problems.
                Specialized in machine learning, deep learning, and data analytics.
              </p>
              <div className="flex items-center gap-6">
                <HoverLift lift={3}>
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded text-text-muted transition-colors duration-fast hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </HoverLift>
                <HoverLift lift={3}>
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded text-text-muted transition-colors duration-fast hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </HoverLift>
                <HoverLift lift={3}>
                  <a
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded text-text-muted transition-colors duration-fast hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </HoverLift>
                <HoverLift lift={3}>
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded text-text-muted transition-colors duration-fast hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </HoverLift>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-heading-sm font-semibold text-text">Quick Links</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                    <li key={item.toLowerCase()}>
                      <PressScale scale={0.98}>
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="rounded text-body-sm text-text-muted transition-colors duration-fast hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          {item}
                        </a>
                      </PressScale>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-heading-sm font-semibold text-text">Connect</h3>
              <address className="space-y-3 text-body-sm not-italic text-text-muted">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 transition-colors duration-fast hover:text-text"
                >
                  <Mail size={16} />
                  <span>{profile.email}</span>
                </a>
                <div className="flex items-center gap-2">
                  <span className="text-text-subtle">{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-text-subtle">
                  {profile.availability}
                </div>
              </address>
            </div>
          </div>

          <Divider className="my-8" />

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-body-sm text-text-subtle">
              © {currentYear} Noah Nerius P. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-body-sm text-text-subtle">
              Built with <Heart className="text-red-500" aria-hidden="true" /> and{' '}
              <Code className="text-primary" aria-hidden="true" /> using React, TypeScript, Tailwind
              & Framer Motion
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
