import React from 'react'
import image from '../../assets/Portfolio-1.png'


function PortfolioCardContent(
  // { image, ProjectName }
) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-5">
      <div className="w-full h-[250px]  rounded-[50px]">
        <img src={image} alt='' className='h-full w-full '/>
      </div>
    </div>
  )
}

export default PortfolioCardContent