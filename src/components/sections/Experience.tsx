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
import { experience, education } from '@/data/timeline';
import { Briefcase, GraduationCap, CheckCircle, MapPin, Calendar, Building2 } from 'lucide-react';

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  current?: boolean;
  description: string;
  achievements: readonly string[];
  techStack: readonly string[];
  index: number;
}

function TimelineItem({
  icon,
  title,
  subtitle,
  date,
  location,
  current,
  description,
  achievements,
  techStack,
  index,
}: TimelineItemProps) {
  return (
    <SlideUp delay={index * 0.1} distance={20}>
      <HoverLift lift={2}>
        <Card className="group relative">
          <CardContent className="relative">
            <div
              className="absolute left-0 top-4 h-4 w-4 flex-shrink-0 -translate-x-1/2 rounded-full border-4 border-background bg-primary"
              aria-hidden="true"
            />
            <div className="pl-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg border border-border bg-surface-elevated p-2 text-primary">
                  {icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-baseline gap-2">
                    <h3 className="text-heading-sm font-semibold text-text">{title}</h3>
                    {current && (
                      <Tag variant="primary" size="sm">
                        Current
                      </Tag>
                    )}
                  </div>
                  <p className="mb-1 text-body font-medium text-primary">{subtitle}</p>
                  <div className="mb-3 flex flex-wrap items-center gap-4 text-body-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {date}
                      {current ? ' — Present' : ''}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {location}
                    </span>
                  </div>
                  <p className="mb-4 text-body text-text-muted">{description}</p>

                  {achievements.length > 0 && (
                    <ul className="mb-4 space-y-2" role="list">
                      {achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-body-sm text-text-muted">
                          <CheckCircle
                            size={14}
                            className="mt-0.5 flex-shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <Tag key={tech} variant="outline" size="sm">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </HoverLift>
    </SlideUp>
  );
}

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience">
      <Container>
        <StaggerContainer staggerDelay={0.1}>
          <FadeIn className="mb-12">
            <SectionHeader
              title="Experience & Education"
              subtitle="Professional journey and academic background"
            />
          </FadeIn>

          <div className="space-y-8">
            <FadeIn>
              <h3 className="mb-6 flex items-center gap-2 text-heading-md font-semibold text-text">
                <Briefcase size={24} className="text-primary" aria-hidden="true" />
                Professional Experience
              </h3>
            </FadeIn>

            <div className="relative">
              <div className="absolute bottom-0 left-6 top-0 w-px bg-border" aria-hidden="true" />
              <StaggerContainer staggerDelay={0.08}>
                {experience.map((exp, index) => (
                  <TimelineItem
                    key={exp.id}
                    index={index}
                    icon={<Building2 size={18} />}
                    title={exp.role}
                    subtitle={exp.company}
                    date={exp.startDate}
                    location={exp.location}
                    current={exp.current}
                    description={exp.description}
                    achievements={exp.achievements}
                    techStack={exp.techStack}
                  />
                ))}
              </StaggerContainer>
            </div>

            <FadeIn className="mt-16">
              <h3 className="mb-6 flex items-center gap-2 text-heading-md font-semibold text-text">
                <GraduationCap size={24} className="text-primary" aria-hidden="true" />
                Education
              </h3>
            </FadeIn>

            <div className="relative">
              <div className="absolute bottom-0 left-6 top-0 w-px bg-border" aria-hidden="true" />
              <StaggerContainer staggerDelay={0.08}>
                {education.map((edu, index) => (
                  <TimelineItem
                    key={edu.id}
                    index={index}
                    icon={<GraduationCap size={18} />}
                    title={edu.degree}
                    subtitle={edu.institution}
                    date={`${edu.startDate} — ${edu.endDate}`}
                    location={edu.location}
                    current={false}
                    description={edu.description}
                    achievements={edu.highlights}
                    techStack={[]}
                  />
                ))}
              </StaggerContainer>
            </div>
          </div>
        </StaggerContainer>
      </Container>
    </Section>
  );
}
