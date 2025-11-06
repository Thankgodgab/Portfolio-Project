import React from 'react'
import SpanText from './SpanText'

function SubTitle({ text, title, titleSpan }) {
    return (
        <div className="w-full flex flex-col gap-2.5 items-center justify-start">
            <div className="w-full flex gap-2.5">
                <div className="w-[20px] h-[20px] bg-gradient-to-r from-accent-secondary to-accent rounded-full" />
                <h2 className="text-white text-[16px] font-medium leading-[22px]">{text}</h2>
            </div>
            <div className="w-full flex gap-2.5">
                <h2 className="text-[42px] text-white leading-[1.2em] font-semibold">
                    {title}
                    <SpanText text={titleSpan} />
                </h2>
            </div>
        </div>
    )
}

export default SubTitle