function Education() {
  return (
    <div className="page">
      <section className="page-head">
        <h1>
          <span className="prompt">$</span> cat ./education
        </h1>
      </section>

      <section className="section">
        <div className="edu-block">
          <div className="edu-row">
            <div className="edu-main">
              <h2>Dublin City University (DCU)</h2>
              <p className="project-tag">Computer Science</p>
            </div>
            <span className="edu-year">2026 onwards</span>
          </div>
          <p>
            Accepted through the CTYI Early University Entrance (EUE) programme for Computer Science, with a
            scholarship / bursary.
          </p>
        </div>

        <div className="edu-block">
          <div className="edu-row">
            <div className="edu-main">
              <h2>Athlone Community College</h2>
              <p className="project-tag">Transition Year</p>
            </div>
            <span className="edu-year">Current</span>
          </div>
          <p>
            Transition Year student, County Westmeath. Also serves on the Student Council Executive as a
            Student Council Officer / Junior Officer.
          </p>
        </div>

        <div className="edu-block">
          <div className="edu-row">
            <div className="edu-main">
              <h2>CREST Gold Award</h2>
              <p className="project-tag">British Science Association</p>
            </div>
            <span className="edu-year">2025</span>
          </div>
          <p>
            Awarded for an extended independent research investigation: the Smarter Cancer Staging machine
            learning project. CREST Gold is the highest level of the CREST Awards.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Education
