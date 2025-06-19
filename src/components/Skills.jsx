"../styles/Skills.css";
function Skills() {
  return (
    <>
      <section className="container">
        <div className="skills-section text-white" id="skills">
          <h2 className="skills-title">Skills</h2>
          <span className="badge bg-success m-1">Python</span>

          <span className="badge bg-secondary m-1">Node.js</span>

          <span className="badge bg-danger m-1">Django</span>
          <span className="badge bg-light text-dark m-1">Flask</span>

          <span className="badge bg-info m-1">PostgreSQL</span>
          <span className="badge bg-primary m-1">MongoDB</span>
          <span className="badge bg-primary m-1">React</span>
          <span className="badge bg-dark m-1">Docker</span>
          <span className="badge bg-warning text-dark m-1">JavaScript</span>
          <span className="badge bg-info text-dark m-1">FastAPI</span>
        </div>
      </section>
    </>
  );
}

export default Skills;
