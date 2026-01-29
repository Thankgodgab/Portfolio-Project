import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function PortfolioCard({ image, title, category, link, className }) {
  return (
    <div className={`w-full flex flex-col gap-6 group cursor-pointer ${className}`}>
      {/* Card Image Container */}
      <div className="relative w-full aspect-[4/3.8] rounded-[40px] overflow-hidden bg-[#1D2432]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <a
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[60px] h-[60px] bg-gradient-to-r from-accent-secondary to-accent rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-xl hover:shadow-accent/40"
            onClick={(e) => e.stopPropagation()}
          >
            <IoIosArrowRoundForward size={45} className='text-primary rotate-[-45deg] group-hover:rotate-0 transition-all duration-500' />
          </a>
        </div>
      </div>

      {/* Card Text Content */}
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-white text-[24px] font-bold tracking-tight">
          {title}
        </h3>
        <p className="text-white/50 text-[18px] font-medium">
          {category}
        </p>
      </div>
    </div>
  )
}

export default PortfolioCard
