function Education({ education }) {
  const educationList = education || [];

  return (
    <section id="education" className="section dark-section">
      <div className="container">
        <h2 className="section-title"><span className="gradient-text">Education</span></h2>

        <div className="grid">
          {educationList.map((item, index) => {
            const courseOrDegree = item.degree || item.course || "Course / Degree";
            const collegeName = item.college || item.collage || "College / University";
            const yearText = item.year || "Year";
            const desc = item.description || "";

            return (
              <div className="card" key={item.id || item.degree || item.course || index}>
                <p className="year">{yearText}</p>
                <h3>{courseOrDegree}</h3>
                <p>{collegeName}</p>
                {desc && <p className="muted">{desc}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
