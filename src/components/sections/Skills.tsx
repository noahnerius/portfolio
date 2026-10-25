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
import { skills } from '@/data/skills';
import { Brain, Network, Database, Cpu, Code, ChevronRight, type LucideIcon } from 'lucide-react';

const categoryIcons: Record<string, LucideIcon> = {
  'Machine Learning & AI': Brain,
  'Deep Learning Specializations': Network,
  'Data & Analytics': Database,
  'Engineering & Deployment': Cpu,
  'Core CS & Tools': Code,
};

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills">
      <Container>
        <StaggerContainer staggerDelay={0.1}>
          <FadeIn className="mb-12">
            <SectionHeader
              title="Skills & Technologies"
              subtitle="Technologies and tools I work with daily"
            />
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((category, categoryIndex) => (
              <SlideUp key={category.category} delay={categoryIndex * 0.08} distance={20}>
                <HoverLift lift={4}>
                  <Card className="h-full">
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-lg border border-primary/30 bg-primary/15 p-2 text-primary">
                          {(() => {
                            const Icon = categoryIcons[category.category] || Code;
                            return <Icon size={20} aria-hidden="true" />;
                          })()}
                        </div>
                        <div>
                          <h3 className="text-heading-sm font-semibold text-text">
                            {category.category}
                          </h3>
                          <p className="text-caption text-text-muted">
                            {category.items.length} technologies
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, skillIndex) => (
                          <FadeIn key={skill.name} delay={skillIndex * 0.03}>
                            <Tag
                              variant="outline"
                              size="sm"
                              className="cursor-default transition-all duration-fast hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                            >
                              {skill.name}
                              <ChevronRight
                                size={12}
                                className="ml-1 opacity-0 transition-opacity duration-fast group-hover:opacity-100"
                                aria-hidden="true"
                              />
                            </Tag>
                          </FadeIn>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </HoverLift>
              </SlideUp>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </Section>
  );
}
