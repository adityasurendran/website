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
      <section className="page-head">
        <h1>Maths & Awards</h1>
        <p>Competitive mathematics results and competition recognition.</p>
      </section>

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

      <section className="section">
        <h2>Competitions & recognition</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <div>
              <h3>Eskom Expo International Science Fair</h3>
              <p>One of two students selected to represent SciFest and Ireland. South Africa, 29 Sep - 2 Oct 2026.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <div>
              <h3>Intel AI Global Summit</h3>
              <p>One of three students selected to represent Ireland in connection with an international Intel AI / technology opportunity.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <div>
              <h3>SciFest@College TUS Athlone</h3>
              <p>Best Project and 1st Place in Intermediate Technology for the Byzantine Fault Tolerance consensus research.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <div>
              <h3>SciFest@School</h3>
              <p>Best Project / 1st Place, plus the EirGrid Cleaner Climate Award for the urban transport project.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <div>
              <h3>ECO-UNESCO Young Environmentalist Awards</h3>
              <p>Best Junior Transport Project for Pareto-Optimal Urban Transport.</p>
            </div>
          </div>
          <div className="timeline-item">
            <span className="timeline-year">2025</span>
            <div>
              <h3>CREST Gold Award</h3>
              <p>British Science Association CREST Gold, the highest level of the awards, for the Smarter Cancer Staging research.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Maths
