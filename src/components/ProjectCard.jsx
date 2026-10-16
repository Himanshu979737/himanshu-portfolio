import { Github, ExternalLink } from "lucide-react";

function ProjectCard({project}) {
  return (
    <div className="card project-card">
      <div className="project-image">

       {
        project.image ?(
          <img src={project.image} alt={project.title} />
        ):(
          <span className="image placeholder">{project.title[0]}</span>
        )
       }
      </div>

      <h3></h3>
      <p className="muted"></p>

      <div className="badges">
        <span className="badge small"></span>
      </div>

      <div className="project-links">
        <a className="btn btn-ghost btn-small"><Github size={16} /></a>
        <a className="btn btn-primary btn-small"><ExternalLink size={16} /></a>
      </div>
    </div>
  );
}

export default ProjectCard;