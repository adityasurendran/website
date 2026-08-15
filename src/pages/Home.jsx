import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

const highlights = [
  {
    year: '2026',
    title: 'Eskom Expo International Science Fair',
    detail: 'One of two students selected to represent SciFest and Ireland. South Africa, 29 Sep - 2 Oct 2026.',
  },
  {
    year: '2026',
    title: 'Intel AI Global Summit',
    detail: 'One of three students selected to represent Ireland in connection with an international Intel AI opportunity.',
  },
  {
    year: '2026',
    title: 'DCU Early University Entrance',
    detail: 'Accepted to DCU Computer Science through the CTYI EUE programme, with a scholarship.',
  },
  {
    year: '2026',
    title: 'SciFest National Final',
    detail: 'Byzantine Fault Tolerance research progressed to the national final after winning at school and college level.',
  },
  {
    year: '2025',
    title: 'CREST Gold Award',
    detail: 'British Science Association CREST Gold, the highest level of the awards, for the cancer staging research.',
  },
  {
    year: '2026',
    title: 'Maths competitions',
    detail: 'LWETB Junior Maths 1st Place, ETB All-Ireland 2nd Place, IAMTA Junior Regional 1st Place.',
  },
]

function Home() {
  return (
    <div className="page">
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

      <section className="section">
        <div className="section-head">
          <h2>Projects</h2>
          <Link className="text-link" to="/projects">
            View all
          </Link>
        </div>
        <div className="grid">
          {projects.map((p) => (
            <article className="card" key={p.slug}>
              <div className="card-top">
                <span className="tag">{p.tag}</span>
                <span className="status">{p.status}</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <Link className="text-link" to={p.link || '/projects'}>
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Highlights</h2>
          <Link className="text-link" to="/maths">
            Maths & awards
          </Link>
        </div>
        <div className="timeline">
          {highlights.map((h) => (
            <div className="timeline-item" key={h.title}>
              <span className="timeline-year">{h.year}</span>
              <div>
                <h3>{h.title}</h3>
                <p>{h.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
