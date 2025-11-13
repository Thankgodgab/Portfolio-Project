import React, { useEffect, useRef, useState } from 'react'

function SkillCardContent({ name, level, icon: Icon, iconColor, onProgress, animDuration = 2000 }) {
  const containerRef = useRef(null)
  const [count, setCount] = useState(0)
  const animatedRef = useRef(false)

  // normalize level to number (e.g. '80%' -> 80)
  const target = React.useMemo(() => {
    if (typeof level === 'number') return Math.max(0, Math.min(100, Math.round(level)))
    if (typeof level === 'string') {
      const num = parseInt(level.replace(/[^0-9]/g, ''), 10)
      return Number.isFinite(num) ? Math.max(0, Math.min(100, num)) : 0
    }
    return 0
  }, [level])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true
            // trigger parent's progress to final target once so the bar can animate via CSS
            if (typeof onProgress === 'function') {
              onProgress(target)
            }

            // animate from 0 to target over duration
            const duration = animDuration || 2000 // ms
            const start = performance.now()

            function tick(now) {
              const elapsed = now - start
              const progress = Math.min(1, elapsed / duration)
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3)
              const value = Math.round(eased * target)
              setCount(value)
              if (progress < 1) requestAnimationFrame(tick)
            }

            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, onProgress, animDuration])

  return (
    <div ref={containerRef} className="w-full h-full flex items-center gap-5">
      <div className={`rounded-full p-2.5 bg-white/5 backdrop-blur-md flex items-center justify-center ${iconColor} group-hover:text-accent transition-colors duration-300 text-[35px] md:text-[50px]`}>
        {Icon ? <Icon /> : null}
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-[18px] md:text-[24px] text-white font-semibold">{name}</h3>
      </div>

      <span className="text-[24px] md:text-[28px] text-accent font-semibold">{count}%</span>
    </div>
  )
}

export default SkillCardContent