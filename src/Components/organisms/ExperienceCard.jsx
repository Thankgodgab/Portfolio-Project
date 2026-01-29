import React from 'react'
import * as motion from 'motion/react-client'

function ExperienceCard({ icon: Icon, title, items }) {
    return (
        <div className="w-full bg-[#1D2432]/50 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-[40px] flex flex-col gap-10 group transition-all duration-500 hover:bg-[#1D2432]/80">
            {/* Card Header */}
            <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] bg-gradient-to-r from-accent-secondary/20 to-accent/20 rounded-full flex items-center justify-center border border-accent/20 group-hover:from-accent-secondary group-hover:to-accent transition-all duration-500">
                    <Icon
                        size={30}
                        className="text-accent group-hover:text-primary transition-all duration-500 group-hover:[transform:rotateY(180deg)]"
                    />
                </div>
                <h3 className="text-white text-[24px] md:text-[28px] font-bold tracking-tight">
                    {title}
                </h3>
            </div>

            {/* Items List */}
            <div className="flex flex-col gap-8">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-4 group/item">
                        <div className="flex flex-col gap-1">
                            <h4 className="text-white text-[20px] md:text-[22px] font-bold group-hover/item:text-accent transition-colors duration-300">
                                {item.title}
                            </h4>
                            <p className="text-white/60 text-[16px] md:text-[18px]">
                                {item.subtitle}
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-accent-secondary/10 to-accent/10 px-6 py-2 rounded-full border border-accent/20 group-hover/item:from-accent-secondary group-hover/item:to-accent transition-all duration-500 shrink-0 w-fit">
                            <span className="text-accent group-hover/item:text-primary font-bold text-[14px] md:text-[16px] transition-colors duration-500">
                                {item.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceCard
