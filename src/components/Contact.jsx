import { Mail, Github, Linkedin } from "lucide-react";

function Contact({ email, socials }) {
  const contactEmail = email || "student@example.com";
  const githubUrl = socials?.github || socials?.Github;
  const linkedinUrl = socials?.linkedin || socials?.Linkedin;

  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="muted">I am open to internship and junior roles</p>

          <div className="contact-links">
            {contactEmail && (
              <a className="icon-link icon-link-text" href={`mailto:${contactEmail}`}>
                <Mail size={18} />{contactEmail}
              </a>
            )}
            {githubUrl && (
              <a
                className="icon-link icon-link-text"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />Github
              </a>
            )}
            {linkedinUrl && (
              <a
                className="icon-link icon-link-text"
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />Linkedin
              </a>
            )}
          </div>

          {contactEmail && (
            <a className="btn btn-primary" href={`mailto:${contactEmail}`}>Contact me</a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
