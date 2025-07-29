import React from 'react'

const services = [
  'BRANDING',
  'GRAPHIC DESIGN',
  'WEB DEVELOPMENT',
  'MOBILE APP DEVELOPMENT',
  'REAL ESTATE CONSULTING',
]

function Carousel() {
  return (
     <div className="overflow-hidden whitespace-nowrap bg-gradient-to-r from-accent-secondary to-accent py-3 md:py-5">
      <div className="inline-flex animate-marquee">
        {[...services, ...services].map((item, index) => (
          <span
            key={index}
            className="text-primary font-bold text-[20px] md:text-[30px] mx-6 flex items-center"
          >
            {item}
            <span className="mx-4 text-xl text-black">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Carousel