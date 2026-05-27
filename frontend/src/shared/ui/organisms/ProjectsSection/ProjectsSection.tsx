import { useNavigate } from "react-router-dom";
import type { Project } from "../../../../entities/project";
import { Button } from "../../atoms/Button";
import { Section } from "../../Section";
import { layout } from "../../../lib/ui-classes";
import { ProjectCaseCard } from "../../molecules/ProjectCaseCard";

type ProjectsSectionProps = {
  projects: Project[];
  isLoading?: boolean;
  showViewAll?: boolean;
  limit?: number;
};

export const ProjectsSection = ({
  projects,
  isLoading = false,
  showViewAll = true,
  limit,
}: ProjectsSectionProps) => {
  const navigate = useNavigate();
  const visible =
    limit !== undefined ? projects.slice(0, limit) : projects;

  return (
    <Section
      id="projects"
      title="Проекты"
      subtitle="Case studies — от задачи до результата"
    >
      {isLoading ? (
        <p className="text-[var(--color-text-muted)]">Загрузка проектов…</p>
      ) : visible.length === 0 ? (
        <p className="text-[var(--color-text-muted)]">
          Проекты скоро появятся здесь.
        </p>
      ) : (
        <ul className={layout.gridProjects}>
          {visible.map((project) => (
            <li key={project.id} className="min-w-0">
              <ProjectCaseCard project={project} />
            </li>
          ))}
        </ul>
      )}

      {showViewAll ? (
        <div className="mt-[var(--space-2xl)]">
          <Button variant="secondary" onClick={() => navigate("/projects")}>
            Все проекты
          </Button>
        </div>
      ) : null}
    </Section>
  );
};
