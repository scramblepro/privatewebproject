import { useEffect, useState } from "react";
import { getProjects } from "../api/api";
import type { Project } from "../entities/project/model/types";
import { Container } from "../shared/ui/atoms/Container";
import { Section } from "../shared/ui/atoms/Section";
import { ProjectCard } from "../shared/ui/molecules/ProjectCard";
import { SectionHeading } from "../shared/ui/molecules/SectionHeading";

const HEADING_ID = "projects-page-heading";

export const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getProjects()
      .then((data) => {
        if (!cancelled) {
          setProjects(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setProjects([]);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section aria-labelledby={HEADING_ID} className="first:pt-[var(--space-xl)]">
      <Container>
        <SectionHeading
          id={HEADING_ID}
          title="Наши проекты"
          subtitle="Полный список реализованных работ"
        />

        {isLoading ? (
          <p className="text-[var(--color-text-muted)]">Загрузка…</p>
        ) : projects.length === 0 ? (
          <p className="text-[var(--color-text-muted)]">Пока нет проектов.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.id} className="min-w-0">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
};
