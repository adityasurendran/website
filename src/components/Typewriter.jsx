import { useEffect, useState } from 'react'

function Typewriter({ text, speed = 28, startDelay = 0 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const start = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(start)
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    if (count >= text.length) return
    const t = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(t)
  }, [started, count, text, speed])

  const done = count >= text.length

  return (
    <span className="typewriter">
      {text.slice(0, count)}
      <span className={done ? 'cursor cursor-blink' : 'cursor'} />
    </span>
  )
}

export default Typewriter
