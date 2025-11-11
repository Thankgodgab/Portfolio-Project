import { div } from 'motion/react-client'
import React from 'react'
import { FaReact } from 'react-icons/fa'

function SkillCardContent(
    // { name, level, icon }
) {
  return (
    <div className="w-full h-full flex justify-center items-center gap-5">
        <div className="rounded-full p-2.5 bg-white/5 backdrop-blur-md flex flex-col justify-between items-center group text-blue-500 group-hover:text-accent transition-colors duration-300">
            <FaReact size={50} />
        </div>
        <div className="flex items-center justify-center gap-5 ">
            <h3 className="text-2xl text-white font-normal">React</h3>
            <span className="text-5xl text-accent font-semibold ">80%</span>
        </div>
    </div>
  )
}

export default SkillCardContent