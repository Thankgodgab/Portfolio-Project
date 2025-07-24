import React from 'react'

function SubTitle({ text }) {
    return (
        <div className="w-full flex gap-2.5 items-center justify-start">
            <div className="w-[20px] h-[20px] bg-gradient-to-r from-accent-secondary to-accent rounded-full" />
            <h2 className="text-white text-[16px] font-medium leading-[22px]">{text}</h2>
        </div>
    )
}

export default SubTitle