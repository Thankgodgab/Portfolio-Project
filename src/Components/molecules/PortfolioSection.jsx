import React from 'react'
import CtaBtn from '../organisms/CtaBtn'
import SubTitle from '../organisms/SubTitle'
import SpanText from '../organisms/SpanText'
import * as motion from 'motion/react-client'
import PortfolioCard from './PortfolioCard'
import { siteContent } from '../../constant/websiteContent'

function PortfolioSection() {
  const { portfolio } = siteContent;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-[80px] py-[100px] overflow-hidden">
      <div className="w-full flex flex-col md:flex-row gap-8 items-start mb-16">
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col gap-4">
          <SubTitle
            text="My Portfolio"
            title={portfolio.title}
            titleSpan={portfolio.titleSpan}
          />

        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col gap-8">
          <p className="text-[18px] md:text-[20px] font-normal text-white/80 leading-relaxed max-w-[600px]">
           {portfolio.description}
          </p>
          <button className="w-fit">
            <CtaBtn text={portfolio.buttonText} />
          </button>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
        viewport={{ once: true }}
        className="w-full">
        <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project) => (
            <PortfolioCard
              key={project.id}
              image={project.image}
              title={project.title}
              category={project.category}
              link={project.link}
            />
          ))}
        </div>
      </motion.div>


      <div className="pt-[100px] w-fit mx-auto text-center text-white font-normal text-[18px] md:text-[20px] leading-[24px]">
        <p>
          {portfolio.footerTextStart}
          <a href={portfolio.footerLink} className="hover:opacity-80 transition-opacity">
            <SpanText text={portfolio.footerTextSpan} />
          </a>
        </p>
      </div>
    </div>
  )
}

export default PortfolioSection
