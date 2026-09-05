import { useEffect, useRef, useState } from 'react'

const SECRET = '6156047993959762'
const HOLD_MS = 550

function HoldName({ children }) {
  const [show, setShow] = useState(false)
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)
  const suppressClick = useRef(false)
  const wrapRef = useRef(null)

  const startHold = () => {
    setCopied(false)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      setShow(true)
      suppressClick.current = true
      // allow the subsequent click (from the release) to be swallowed,
      // then re-arm clicks after a tick
      setTimeout(() => {
        suppressClick.current = false
      }, 400)
    }, HOLD_MS)
  }

  const cancelHold = () => {
    clearTimeout(timer.current)
  }

  // Dismiss when tapping elsewhere / pressing Escape
  useEffect(() => {
    if (!show) return
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setShow(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setShow(false)
    }
    const t = setTimeout(() => setShow(false), 6000)
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [show])

  const copySecret = async () => {
    try {
      await navigator.clipboard.writeText(SECRET)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard unavailable (non-secure context) — still select for manual copy
      const el = wrapRef.current?.querySelector('.hold-secret-num')
      if (el) {
        const r = document.createRange()
        r.selectNodeContents(el)
        const sel = window.getSelection()
        sel?.removeAllRanges()
        sel?.addRange(r)
      }
    }
  }

  return (
    <span
      ref={wrapRef}
      className="hold-name"
      title="Hold to reveal"
      onMouseDown={startHold}
      onMouseUp={cancelHold}
      onMouseLeave={cancelHold}
      onTouchStart={startHold}
      onTouchEnd={cancelHold}
      onTouchCancel={cancelHold}
      onContextMenu={(e) => {
        // On touch devices a long-press fires contextmenu — swallow it
        // once the secret is showing so the native menu doesn't cover it.
        if (show) e.preventDefault()
      }}
      onClickCapture={(e) => {
        if (suppressClick.current) {
          e.preventDefault()
          e.stopPropagation()
        }
      }}
    >
      <span className="hold-name-text">{children}</span>
      {show ? (
        <span className="hold-secret" role="status" onPointerDown={(e) => e.stopPropagation()}>
          <button type="button" className="hold-secret-num" onClick={copySecret} title="Click to copy">
            {SECRET}
          </button>
          <span className="hold-secret-hint">{copied ? 'copied!' : 'hold revealed · click to copy'}</span>
        </span>
      ) : null}
    </span>
  )
}

export default HoldName
