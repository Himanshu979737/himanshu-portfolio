import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  if (!project) return null;

  const githubUrl = project.github || project.Github;
  const demoUrl = project.demo || project.Demo;
  const technologies = project.technologies || [];
  const placeholderChar = project.title ? project.title[0] : "P";

  return (
    <div className="card project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title || "Project"} />
        ) : (
          <span className="image-placeholder">{placeholderChar}</span>
        )}
      </div>

      <h3>{project.title || "Project Title"}</h3>
      <p className="muted">{project.description || "Project description not provided."}</p>

      <div className="badges">
        {technologies.map((tech) => (
          <span className="badge small" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {githubUrl && (
          <a
            className="btn btn-ghost btn-small"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />Github
          </a>
        )}
        {demoUrl && (
          <a
            className="btn btn-primary btn-small"
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
