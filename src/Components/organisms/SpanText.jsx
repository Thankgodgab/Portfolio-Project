import React from 'react'

function SpanText({ text }) {
    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-secondary transition-all duration-300">
            {text}
        </span>
    )
}

export default SpanText