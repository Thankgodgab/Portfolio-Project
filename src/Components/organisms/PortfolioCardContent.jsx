import React from 'react'
import image from '../../assets/Portfolio.png'

function PortfolioCardContent(
    // { image, ProjectName }
) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-5">
        <div className="w-full h-auto md:h-[400px] rounded-[50px]">
            <img src={image} alt='' />
        </div>
    </div>
  )
}

export default PortfolioCardContent