import { ArrowRight, Github, Linkedin, Mail, Code, Brain, BarChart3 } from 'lucide-react';
import { linkButtonStyles } from '@/components/ui/linkButtonStyles';
import { Container } from '@/components/ui/Container';
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  PressScale,
  HoverLift,
} from '@/components/animations/MotionPrimitives';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)/5_0%,_transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,_var(--color-background)_0%,_transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative py-20 lg:py-32">
        <StaggerContainer staggerDelay={0.1} className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-body-sm font-medium text-primary">
              <Brain size={16} aria-hidden="true" />
              <span>AI/ML Engineer</span>
            </div>
          </FadeIn>

          <SlideUp delay={0.2} distance={20} className="mb-6">
            <h1 className="text-display-xl font-bold leading-tight text-text">
              Building Intelligent Systems
              <br />
              <span className="text-gradient">That Solve Real Problems</span>
            </h1>
          </SlideUp>

          <FadeIn delay={0.3} className="mx-auto mb-8 max-w-2xl">
            <p className="text-body-lg leading-relaxed text-text-muted">
              {profile.bio.split('\n\n')[0]}
            </p>
          </FadeIn>

          <SlideUp delay={0.4} distance={20} className="mb-12">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PressScale scale={0.98}>
                <a href={profile.resumePath} download className={linkButtonStyles('primary', 'lg')}>
                  Download Resume
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </PressScale>
              <PressScale scale={0.98}>
                <a href="#projects" className={linkButtonStyles('secondary', 'lg')}>
                  View Projects
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </PressScale>
            </div>
          </SlideUp>

          <FadeIn delay={0.5} className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-6 text-body-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Code size={16} aria-hidden="true" />
                <span>Python · PyTorch · TensorFlow</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain size={16} aria-hidden="true" />
                <span>Computer Vision · NLP · GenAI</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 size={16} aria-hidden="true" />
                <span>Data Analytics · MLOps</span>
              </div>
            </div>
          </FadeIn>

          <SlideUp delay={0.6} distance={15}>
            <div className="flex items-center justify-center gap-6">
              <HoverLift lift={3}>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-external"
                  aria-label="GitHub"
                >
                  <Github size={20} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </HoverLift>
              <HoverLift lift={3}>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-external"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </HoverLift>
              <HoverLift lift={3}>
                <a href={`mailto:${profile.email}`} className="link-external" aria-label="Email">
                  <Mail size={20} aria-hidden="true" />
                  <span>Email</span>
                </a>
              </HoverLift>
            </div>
          </SlideUp>
        </StaggerContainer>

        <FadeIn
          delay={0.8}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-border pt-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-text-muted" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
