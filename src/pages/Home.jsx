import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { awards } from '../data/awards.js'
import AwardTimeline from '../components/AwardTimeline.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'

const stats = [
  { end: awards.length, label: 'Honours & distinctions' },
  { end: projects.length, label: 'Research projects' },
  { end: 2, label: 'International selections' },
  { end: awards.filter((a) => a.category === 'Mathematics').length, label: 'Maths competition placements' },
]

function Home() {
  return (
    <div className="page">
      <Reveal>
        <section className="hero">
          <p className="hero-kicker">Transition Year student, Athlone Community College</p>
          <h1>Aditya Surendran</h1>
          <p className="hero-sub">
            I research and build systems across distributed computing, machine learning and embedded
            hardware, and I take the work from design through to evaluation and presentation.
          </p>
          <p className="hero-skills">
            Python, Rust, C, TypeScript. Machine learning, distributed systems, cryptography, edge computing.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/projects">
              View projects
            </Link>
            <Link className="btn btn-ghost" to="/contact">
              Contact
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="section stats-section">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-value">
                  <CountUp end={s.end} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="section-head">
            <h2>Projects</h2>
            <Link className="text-link" to="/projects">
              View all
            </Link>
          </div>
          <div className="grid">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <article className="card">
                  <div className="card-top">
                    <span className="tag">{p.tag}</span>
                    <span className="status">{p.status}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.summary}</p>
                  <div className="card-links">
                    <Link className="text-link" to={p.link || '/projects'}>
                      Read more
                    </Link>
                    {p.report ? (
                      <a className="text-link" href={p.report} target="_blank" rel="noreferrer">
                        Report
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="section-head">
            <h2>Honours timeline</h2>
            <Link className="text-link" to="/maths">
              Maths & honours
            </Link>
          </div>
          <AwardTimeline />
        </section>
      </Reveal>
    </div>
  )
}

export default Home
