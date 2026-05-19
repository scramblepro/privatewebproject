import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../../../../api/api";
import type { Project } from "../../../../entities/project/model/types";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";
import { Section } from "../../atoms/Section";
import { ProjectCard } from "../../molecules/ProjectCard";
import { SectionHeading } from "../../molecules/SectionHeading";

const HEADING_ID = "projects-heading";
const PREVIEW_LIMIT = 4;

type ProjectsSectionProps = {
  showViewAll?: boolean;
  limit?: number;
};

export const ProjectsSection = ({
  showViewAll = true,
  limit = PREVIEW_LIMIT,
}: ProjectsSectionProps) => {
  const navigate = useNavigate();
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

  const visible = projects.slice(0, limit);

  return (
    <Section aria-labelledby={HEADING_ID}>
      <Container>
        <SectionHeading
          id={HEADING_ID}
          title="Проекты"
          subtitle="Подборка реализованных решений"
        />

        {isLoading ? (
          <p className="text-[var(--color-text-muted)]">Загрузка проектов…</p>
        ) : visible.length === 0 ? (
          <p className="text-[var(--color-text-muted)]">
            Проекты скоро появятся здесь.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-[var(--space-lg)] md:grid-cols-2 xl:grid-cols-2">
            {visible.map((project) => (
              <li key={project.id} className="min-w-0">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        )}

        {showViewAll ? (
          <div className="mt-[var(--space-xl)]">
            <Button variant="outline" onClick={() => navigate("/projects")}>
              Все проекты
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
};
