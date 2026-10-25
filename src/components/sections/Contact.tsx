import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { linkButtonStyles } from '@/components/ui/linkButtonStyles';
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  HoverLift,
  PressScale,
} from '@/components/animations/MotionPrimitives';
import { profile } from '@/data/profile';
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Calendar,
  ExternalLink,
  ArrowRight,
  Check,
} from 'lucide-react';
import { Divider } from '@/components/ui/Divider';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: 'Best way to reach me',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@noahnerius',
    href: profile.social.github,
    description: 'Code & open source',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Noah Nerius P',
    href: profile.social.linkedin,
    description: 'Professional network',
    external: true,
  },
  {
    icon: Twitter,
    label: 'Twitter',
    value: '@noahnerius',
    href: profile.social.twitter,
    description: 'Thoughts & updates',
    external: true,
  },
];

const infoItems = [
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: Calendar, label: 'Availability', value: profile.availability },
];

export function Contact() {
  return (
    <Section id="contact" ariaLabel="Contact">
      <Container>
        <StaggerContainer staggerDelay={0.1}>
          <FadeIn className="mb-12">
            <SectionHeader
              title="Get In Touch"
              subtitle="Interested in working together? I'd love to hear from you."
            />
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            <SlideUp delay={0.1} distance={20}>
              <Card className="h-full">
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-heading-sm font-semibold text-text">Let's Connect</h3>
                    <p className="text-body text-text-muted">
                      I'm always open to discussing new opportunities, interesting projects, or just
                      chatting about ML. Feel free to reach out through any of the channels below.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <FadeIn key={method.label} delay={index * 0.05}>
                        <HoverLift lift={2}>
                          <a
                            href={method.href}
                            target={method.external ? '_blank' : undefined}
                            rel={method.external ? 'noopener noreferrer' : undefined}
                            className="group flex items-center gap-4 rounded-lg border border-border bg-surface-elevated/50 p-4 transition-all duration-fast hover:border-primary/50 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            <div className="flex-shrink-0 rounded-lg border border-primary/30 bg-primary/15 p-3 text-primary transition-colors group-hover:bg-primary/25">
                              <method.icon size={20} aria-hidden="true" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-baseline gap-2">
                                <span className="font-medium text-text">{method.label}</span>
                                {method.external && (
                                  <ExternalLink
                                    size={14}
                                    className="text-text-subtle transition-colors group-hover:text-primary"
                                    aria-hidden="true"
                                  />
                                )}
                              </div>
                              <p className="truncate font-mono text-body-sm text-primary">
                                {method.value}
                              </p>
                              <p className="text-caption text-text-subtle">{method.description}</p>
                            </div>
                            <ArrowRight
                              size={20}
                              className="translate-x-0 text-text-subtle transition-colors group-hover:translate-x-1 group-hover:text-primary"
                              aria-hidden="true"
                            />
                          </a>
                        </HoverLift>
                      </FadeIn>
                    ))}
                  </div>

                  <Divider className="my-4" />

                  <div>
                    <h3 className="mb-4 text-heading-sm font-semibold text-text">Quick Info</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {infoItems.map((item, index) => (
                        <FadeIn key={item.label} delay={index * 0.05}>
                          <HoverLift lift={2}>
                            <div className="flex items-start gap-3 rounded-lg border border-border bg-surface-elevated/50 p-3">
                              <div className="flex-shrink-0 rounded border border-primary/30 bg-primary/15 p-2 text-primary">
                                <item.icon size={16} aria-hidden="true" />
                              </div>
                              <div>
                                <p className="text-caption text-text-subtle">{item.label}</p>
                                <p className="text-body-sm text-text">{item.value}</p>
                              </div>
                            </div>
                          </HoverLift>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>

            <SlideUp delay={0.2} distance={20}>
              <Card className="h-full">
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-heading-sm font-semibold text-text">
                      Download Resume
                    </h3>
                    <p className="mb-6 text-body text-text-muted">
                      Get the full details of my experience, education, and technical skills in PDF
                      format.
                    </p>
                    <PressScale scale={0.98}>
                      <a
                        href={profile.resumePath}
                        download
                        className={linkButtonStyles('primary', 'lg') + ' w-full text-center'}
                      >
                        <ArrowRight size={18} aria-hidden="true" />
                        Download Resume (PDF)
                      </a>
                    </PressScale>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="mb-4 text-heading-sm font-semibold text-text">
                      What I'm Looking For
                    </h3>
                    <ul className="space-y-3" role="list">
                      {[
                        'AI/ML Engineering roles (full-time or internship)',
                        'Teams building production ML systems at scale',
                        'Computer vision, NLP, or generative AI focus',
                        'Strong engineering culture with mentorship opportunities',
                        'Remote-first or hybrid (US time zones preferred)',
                      ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.05} className="flex items-start gap-3">
                          <Check
                            size={18}
                            className="mt-0.5 flex-shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span className="text-body text-text-muted">{item}</span>
                        </FadeIn>
                      ))}
                    </ul>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="mb-4 text-heading-sm font-semibold text-text">Response Time</h3>
                    <p className="text-body text-text-muted">
                      I typically respond within 24-48 hours. If you don't hear back, feel free to
                      follow up — sometimes emails get buried!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          </div>
        </StaggerContainer>
      </Container>
    </Section>
  );
}
