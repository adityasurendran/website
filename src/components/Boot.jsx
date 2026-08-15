import { useEffect, useState } from 'react'

const lines = [
  'initializing adityasurendran.com',
  'loading: bls signature aggregation module',
  'loading: bft consensus protocol v2.1',
  'loading: gene expression classifier',
  'loading: urban transport optimizer',
  'establishing fault-tolerant session',
  'access granted',
]

function Boot() {
  const [visible, setVisible] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= lines.length) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 350)
          return c
        }
        return c + 1
      })
    }, 140)
    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div className="boot">
      <div className="boot-window">
        <div className="boot-bar">
          <span className="boot-dot red" />
          <span className="boot-dot yellow" />
          <span className="boot-dot green" />
          <span className="boot-title">as@terminal: ~/portfolio</span>
        </div>
        <div className="boot-body">
          {lines.slice(0, count).map((l) => (
            <p key={l}>
              <span className="boot-prompt">as@host:~$</span> {l}
              <span className="boot-ok"> ok</span>
            </p>
          ))}
          {count < lines.length && <span className="boot-cursor" />}
        </div>
      </div>
    </div>
  )
}

export default Boot
