import { useProjects } from "../../entities/project";
import { ProjectsSection } from "../../shared/ui/organisms/ProjectsSection";

const PREVIEW_LIMIT = 4;

type ProjectsSectionWidgetProps = {
  showViewAll?: boolean;
  limit?: number;
};

export const ProjectsSectionWidget = ({
  showViewAll = true,
  limit = PREVIEW_LIMIT,
}: ProjectsSectionWidgetProps) => {
  const { projects, isLoading } = useProjects();

  return (
    <ProjectsSection
      projects={projects}
      isLoading={isLoading}
      showViewAll={showViewAll}
      limit={showViewAll ? limit : undefined}
    />
  );
};
