import { Github, Linkedin } from "lucide-react";
import defaultProfileImg from "../assets/profile.png";

function Hero({ data }) {
  if (!data) return null;

  // Prefer external image URLs if provided, otherwise use the bundled profile image
  const imageSrc =
    data.profileImage && (data.profileImage.startsWith("http://") || data.profileImage.startsWith("https://"))
      ? data.profileImage
      : defaultProfileImg;

  const githubUrl =
    data.socials?.github || data.socials?.Github || "https://github.com/";
  const linkedinUrl =
    data.socials?.linkedin || data.socials?.Linkedin || "https://linkedin.com/";

  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting">Hi, I am {data.name || "Student Name"}</p>
          <h1 className="hero-title gradient-text">{data.role || "Aspiring Developer"}</h1>
          <p className="hero-text">{data.tagline || "Building modern web experiences with React."}</p>

          <a href="#projects" className="btn btn-primary">Explore my work</a>

          <div className="social-icons">
            {githubUrl && (
              <a
                className="icon-link"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            )}
            {linkedinUrl && (
              <a
                className="icon-link"
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="hero-photo">
          <img
            src={imageSrc}
            alt={data.name || "Student Profile Photo"}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultProfileImg;
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
