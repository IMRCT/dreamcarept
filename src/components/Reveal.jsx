import { useEffect, useRef, useState } from 'react'

// Wraps children in a div that fades + lifts in once it enters the viewport.
export default function Reveal({ delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const delayClass = delay ? ` reveal--delay-${delay}` : ''
  return (
    <div
      ref={ref}
      className={`reveal${shown ? ' is-visible' : ''}${delayClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  )
}
