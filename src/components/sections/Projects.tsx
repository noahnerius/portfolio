import { Container } from '@/components/ui/Container';
import { Section, SectionHeader } from '@/components/ui/Section';
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { Button } from '@/components/ui/Button';
import { linkButtonStyles } from '@/components/ui/linkButtonStyles';
import { FadeIn, StaggerContainer, TiltCard } from '@/components/animations/MotionPrimitives';
import { projects, type Project } from '@/data/projects';
import { Github, ExternalLink, Star, Clock, Zap, Eye } from 'lucide-react';
import { Divider } from '@/components/ui/Divider';

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <FadeIn key={project.id} delay={index * 0.08}>
      <TiltCard maxTilt={6} scale={1.01} className="flex h-full flex-col">
        <CardHeader>
          <div className="mb-3 flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <Tag variant="primary" size="sm" className="mb-2">
                {project.category}
              </Tag>
              <CardTitle className="pr-4">{project.title}</CardTitle>
            </div>
            {project.featured && (
              <div className="flex flex-shrink-0 items-center gap-1 text-body-sm font-medium text-primary">
                <Star size={14} fill="currentColor" aria-hidden="true" />
                <span>Featured</span>
              </div>
            )}
          </div>
          <CardDescription className="line-clamp-3 text-body text-text-muted">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 6).map((tech) => (
              <Tag key={tech} variant="outline" size="sm">
                {tech}
              </Tag>
            ))}
            {project.techStack.length > 6 && (
              <Tag variant="outline" size="sm">
                +{project.techStack.length - 6} more
              </Tag>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between text-caption text-text-subtle">
            <span className="flex items-center gap-1">
              <Clock size={12} aria-hidden="true" />
              {project.year}
            </span>
            <span className="flex items-center gap-1">
              <Zap size={12} aria-hidden="true" />
              {Object.values(project.metrics)[0] || 'Production'}
            </span>
          </div>
        </CardContent>

        <CardFooter className="flex items-center gap-3 pt-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonStyles('ghost', 'sm') + ' flex-1'}
          >
            <Github size={14} aria-hidden="true" />
            <span>Code</span>
          </a>
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={linkButtonStyles('secondary', 'sm') + ' flex-1'}
            >
              <ExternalLink size={14} aria-hidden="true" />
              <span>Demo</span>
            </a>
          ) : (
            <Button variant="ghost" size="sm" disabled className="flex-1 opacity-50">
              <Eye size={14} aria-hidden="true" />
              <span>Private</span>
            </Button>
          )}
        </CardFooter>
      </TiltCard>
    </FadeIn>
  );
}

export function Projects() {
  // Use type assertion with unknown to widen the type
  const featuredProjects = projects.filter((p) => p.featured) as unknown as Project[];
  const otherProjects = projects.filter((p) => !p.featured) as unknown as Project[];

  return (
    <Section id="projects" ariaLabel="Projects">
      <Container>
        <StaggerContainer staggerDelay={0.1}>
          <FadeIn className="mb-12">
            <SectionHeader
              title="Featured Projects"
              subtitle="Selected work showcasing end-to-end ML systems"
            />
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </StaggerContainer>

        {otherProjects.length > 0 && (
          <>
            <Divider className="my-16" />
            <StaggerContainer staggerDelay={0.1}>
              <FadeIn className="mb-8">
                <SectionHeader
                  title="Other Projects"
                  subtitle="Additional work and experiments"
                  align="left"
                />
              </FadeIn>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </StaggerContainer>
          </>
        )}
      </Container>
    </Section>
  );
}
