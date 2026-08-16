import { useMemo, useState } from 'react'
import { awards, awardCategories } from '../data/awards.js'

function AwardTimeline({ className = '' }) {
  const [year, setYear] = useState('All')
  const [category, setCategory] = useState('All')
  const [open, setOpen] = useState(null)

  const years = useMemo(
    () => ['All', ...new Set(awards.map((a) => a.year))].sort((a, b) => (a === 'All' ? -1 : b === 'All' ? 1 : b.localeCompare(a))),
    [],
  )

  const filtered = useMemo(
    () =>
      awards.filter(
        (a) => (year === 'All' || a.year === year) && (category === 'All' || a.category === category),
      ),
    [year, category],
  )

  const toggle = (id) => setOpen((o) => (o === id ? null : id))

  return (
    <div className={`awards ${className}`}>
      <div className="awards-filters">
        <div className="filter-group" role="group" aria-label="Filter by year">
          {years.map((y) => (
            <button
              key={y}
              type="button"
              className={year === y ? 'filter-pill active' : 'filter-pill'}
              onClick={() => {
                setYear(y)
                setOpen(null)
              }}
            >
              {y}
            </button>
          ))}
        </div>
        <div className="filter-group" role="group" aria-label="Filter by category">
          {awardCategories.map((c) => (
            <button
              key={c}
              type="button"
              className={category === c ? 'filter-pill active' : 'filter-pill'}
              onClick={() => {
                setCategory(c)
                setOpen(null)
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="awards-count">
        Showing {filtered.length} of {awards.length} awards
      </p>

      <div className="timeline">
        {filtered.length === 0 ? (
          <p className="awards-empty">No awards match these filters.</p>
        ) : (
          filtered.map((a) => {
            const isOpen = open === a.id
            return (
              <div className="timeline-item" key={a.id}>
                <span className="timeline-year">{a.year}</span>
                <button
                  type="button"
                  className={isOpen ? 'award-card open' : 'award-card'}
                  onClick={() => toggle(a.id)}
                  aria-expanded={isOpen}
                >
                  <span className="award-category">{a.category}</span>
                  <span className="award-title">{a.title}</span>
                  <span className="award-meta">
                    {a.issuer ? <span className="award-issuer">{a.issuer}</span> : null}
                    {a.date ? <span className="award-date">{a.date}</span> : null}
                  </span>
                  <span className="award-body">
                    <span className="award-body-inner">
                      <span className="award-detail">{a.detail}</span>
                      {a.extra ? <span className="award-extra">{a.extra}</span> : null}
                    </span>
                  </span>
                  <span className="award-toggle">{isOpen ? '\u2212' : '+'}</span>
                </button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default AwardTimeline
