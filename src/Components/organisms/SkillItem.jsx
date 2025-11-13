import React, { useRef, useCallback } from 'react'
import { div as MotionDiv } from 'motion/react-client'
import Card from '../molecules/Card'
import SkillCardContent from './SkillCardContent'

function SkillItem({ skill, animDuration = 2000 }) {
  const barRef = useRef(null)

  const handleProgress = useCallback((v) => {
    if (barRef.current) barRef.current.style.width = `${v}%`
  }, [])

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, easing: 'ease-out' }}
      viewport={{ once: true }}
      className="flex items-center justify-center flex-col w-full"
    >
      <Card
        className="w-full p-4 relative"
        content={
          <div className="w-full flex flex-col gap-5">
            <SkillCardContent {...skill} onProgress={handleProgress} animDuration={animDuration} />
            <div ref={barRef} className="w-full h-1.5 bg-accent absolute bottom-0 left-0" style={{ width: '0%', transition: `width ${animDuration}ms ease-out` }} />
          </div>
        }
      />
    </MotionDiv>
  )
}

export default SkillItem
