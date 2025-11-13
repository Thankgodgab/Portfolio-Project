import React from 'react'
import CtaBtn from '../organisms/CtaBtn'
import SubTitle from '../organisms/SubTitle'
import SpanText from '../organisms/SpanText'
import * as motion from 'motion/react-client'
import PortfolioCard from './PortfolioCard'
import PortfolioCardContent from '../organisms/PortfolioCardContent'

function PortfolioSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2.5 md:px-[50px] py-[100px]">
        <div className="w-full flex flex-col md:flex-row gap-2">
            <motion.div 
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col gap-4">
                <SubTitle 
                text="My Portfolio" 
                title="Explore Some of My"
                titleSpan=" Best Works"
                />
                
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col gap-4">
              <p className="text-[18px] font-normal text-white leading-[24px]">
                Here are some of my recent projects that showcase my skills in web development and real estate consulting. Each project reflects my commitment to delivering high-quality, user-centered solutions.
              </p>
              <button className="w-fit">
                <CtaBtn text="View All Works" />
              </button>
            </motion.div>
        </div>


        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
        viewport={{ once: true }}
        className="w-full pt-[50px]">
            <div className="w-full gap-5 p-0 md:p-6 grid grid-cols-1 md:grid-cols-3">
                <PortfolioCard
                    content=<PortfolioCardContent />
                />
            </div>
        </motion.div>

        
        <div className="py-[53px] w-fit mx-auto text-center text-white font-normal text-[18px] leading-[24px]">
          <p>
            Elevate your business with creative 
            <a href="/contact" className="font-semibold">
              <SpanText text=" online solutions." />
            </a>
          </p>
        </div>
    </div>
  )
}

export default PortfolioSection