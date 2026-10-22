import { Github, Linkedin } from "lucide-react";

function Footer({ name, socials }) {
  const studentName = name || "Student";
  const githubUrl = socials?.github || socials?.Github;
  const linkedinUrl = socials?.linkedin || socials?.Linkedin;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>2026 {studentName}, Thanks for visiting</p>
        <div className="social-icons">
          {githubUrl && (
            <a
              className="icon-link"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github size={18} />Github
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
              <Linkedin size={18} />Linkedin
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
