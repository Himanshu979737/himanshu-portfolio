function About({ data }) {
  if (!data) return null;

  const aboutText = data.about || "Passionate computer science student dedicated to building modern web applications.";
  const goalsText = data.goals || "";
  const interests = data.interests || [];

  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title"><span className="gradient-text">About</span></h2>
          <p className="muted">{aboutText}</p>
          {goalsText && <p className="muted">{goalsText}</p>}
        </div>

        <div className="card">
          <h3>Interests</h3>
          <div className="badges">
            {interests.map((item) => (
              <span key={item} className="badge">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
