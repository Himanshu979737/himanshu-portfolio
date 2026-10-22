function Skills({ skills }) {
  const skillsList = skills || [];

  return (
    <section id="skills" className="section dark-section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Skills</span></h2>

        <div className="grid">
          {skillsList.map((group, index) => (
            <div className="card" key={group.category || index}>
              <h3>{group.category || "General"}</h3>
              <div className="badges">
                {(group.items || []).map((item) => (
                  <span className="badge" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
