import React from 'react'

function PortfolioCard({ content, className }) {
  return (
    <div className={`w-full h-auto flex bg-red-500 items-center justify-between flex-col group ${className}`}>
        {content}
    </div>
  )
}

export default PortfolioCard