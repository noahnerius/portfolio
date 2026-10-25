import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import {
  FadeIn,
  SlideUp,
  StaggerContainer,
  HoverLift,
} from '@/components/animations/MotionPrimitives';
import { profile } from '@/data/profile';
import { Briefcase, MapPin, Calendar, Check } from 'lucide-react';
import { Divider } from '@/components/ui/Divider';

export function About() {
  const bioParagraphs = profile.bio.split('\n\n').filter(Boolean);

  return (
    <Section id="about" ariaLabel="About">
      <Container>
        <StaggerContainer staggerDelay={0.1}>
          <FadeIn className="mb-12">
            <SectionHeader title="About Me" subtitle="Get to know the person behind the code" />
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-3">
            <SlideUp delay={0.1} className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="space-y-6">
                  {bioParagraphs.map((paragraph, index) => (
                    <FadeIn
                      key={index}
                      delay={index * 0.1}
                      className="prose prose-invert max-w-none"
                    >
                      <p className="text-body leading-relaxed text-text-muted">{paragraph}</p>
                    </FadeIn>
                  ))}
                </CardContent>
              </Card>
            </SlideUp>

            <SlideUp delay={0.2} distance={30}>
              <HoverLift lift={4}>
                <Card className="h-full">
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-heading-sm font-semibold text-text">Highlights</h3>
                      <ul className="space-y-3">
                        {[
                          '5+ years ML/DL experience',
                          '10+ production models deployed',
                          '3 peer-reviewed publications',
                          'Open-source contributor (500+ stars)',
                          'Mentored 15+ junior engineers',
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
                      <h3 className="mb-4 text-heading-sm font-semibold text-text">Currently</h3>
                      <ul className="space-y-3 text-body-sm text-text-muted">
                        <li className="flex items-center gap-2">
                          <Briefcase size={16} /> {profile.availability}
                        </li>
                        <li className="flex items-center gap-2">
                          <MapPin size={16} /> {profile.location}
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar size={16} /> Open to relocation
                        </li>
                      </ul>
                    </div>

                    <Divider />

                    <div>
                      <h3 className="mb-4 text-heading-sm font-semibold text-text">Focus Areas</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Computer Vision',
                          'NLP / LLMs',
                          'Generative AI',
                          'MLOps',
                          'Edge Deployment',
                          'Data Engineering',
                        ].map((area, i) => (
                          <FadeIn key={area} delay={i * 0.05}>
                            <Tag variant="primary" size="sm">
                              {area}
                            </Tag>
                          </FadeIn>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverLift>
            </SlideUp>
          </div>
        </StaggerContainer>
      </Container>
    </Section>
  );
}
