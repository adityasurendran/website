import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

function Projects() {
  return (
    <div className="page">
      <section className="page-head">
        <h1>Projects</h1>
        <p>
          Independent research projects built, tested and evaluated end to end: from question and design
          through implementation, experimentation and presentation.
        </p>
      </section>

      {projects.map((p, i) => (
        <section className="project" key={p.slug}>
          <div className="project-head">
            <span className="project-num">0{i + 1}</span>
            <div>
              <h2>{p.name}</h2>
              <p className="project-tag">
                {p.tag} <span className="dot">/</span> {p.status}
              </p>
            </div>
          </div>
          <p className="project-summary">{p.summary}</p>
          {p.link ? (
            <Link className="text-link" to={p.link}>
              View project details
            </Link>
          ) : null}

          <div className="project-cols">
            <div>
              <h3>What it involved</h3>
              <ul className="list">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Recognition</h3>
              <ul className="list">
                {p.recognition.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <h3>Focus areas</h3>
              <div className="chips">
                {p.focusAreas.map((f) => (
                  <span className="chip" key={f}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Projects
