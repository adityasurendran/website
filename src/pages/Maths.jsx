import AwardTimeline from '../components/AwardTimeline.jsx'
import Reveal from '../components/Reveal.jsx'

const maths = [
  {
    year: '2026',
    competition: 'IAMTA Junior Regional Problem Solving Competition',
    result: '1st Place',
    note: '',
  },
  {
    year: '2025',
    competition: 'LWETB Junior Maths Competition',
    result: '1st Place',
    note: '',
  },
  {
    year: '2025',
    competition: 'ETB All-Ireland Junior Maths Competition',
    result: '2nd Place nationally among ETB schools',
    note: '',
  },
  {
    year: '2024',
    competition: 'ETB All-Ireland Junior Maths Competition',
    result: '4th Place / Finalist nationally',
    note: '',
  },
  {
    year: '2024',
    competition: 'IMTA Maggie Gough Outstanding Achievement',
    result: '5th overall across all year groups, 2nd among Second Year students',
    note: '95% score. 15,000+ students from 400+ schools.',
  },
]

function Maths() {
  return (
    <div className="page">
      <Reveal>
        <section className="page-head">
          <h1>Maths & Awards</h1>
          <p>Competitive mathematics results and every competition award, in one interactive timeline.</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <h2>Competitive mathematics</h2>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Competition</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {maths.map((m) => (
                  <tr key={m.competition}>
                    <td>{m.year}</td>
                    <td>
                      {m.competition}
                      {m.note ? <span className="table-note"> {m.note}</span> : null}
                    </td>
                    <td>{m.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <h2>All awards</h2>
          <AwardTimeline />
        </section>
      </Reveal>
    </div>
  )
}

export default Maths
