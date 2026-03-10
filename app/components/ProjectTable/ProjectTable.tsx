import { useMemo } from "react";
import { ProjectConfig } from "@/app/types";

interface MenuItem {
  id: number;
  title: string;
  mediaType: "physical" | "web" | "logo" | "mix";
}

const projects: MenuItem[] = [
  {
    id: 0,
    title: "Epoch of Immorality Packaging",
    mediaType: "logo",
  },
  {
    id: 1,
    title: "Human Shield Logo",
    mediaType: "logo",
  },
  {
    id: 2,
    title: "Human Shield Longsleeve",
    mediaType: "physical",
  },
  {
    id: 3,
    title: "En Love Logo",
    mediaType: "logo",
  },
];

interface PropTypes {
  projectConfig: ProjectConfig;
  setCurrentProjectId: (projectId: number) => void;
}

export function ProjectTable({
  projectConfig,
  setCurrentProjectId,
}: PropTypes) {
  const currentProjectId = useMemo(() => {
    return projectConfig.currentProjectId;
  }, [projectConfig.currentProjectId]);

  return (
    <ul>
      {projects.map((project) => (
        <li
          key={project.title}
          className={`px-3 border border-t-0 border-foreground ${currentProjectId === project.id ? "bg-foreground text-background font-bold" : ""}`}
        >
          <a
            className="flex justify-between"
            onClick={() => setCurrentProjectId(project.id)}
          >
            <p>{project.title}</p>
            <i className="font-bold">
              {currentProjectId === project.id ? "-" : "+"}
            </i>
          </a>
        </li>
      ))}
    </ul>
  );
}
