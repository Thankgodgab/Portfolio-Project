import React from 'react'
import * as motion from "motion/react-client"
import { FaFigma, FaReact, FaJs, FaNodeJs, FaBuilding } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import SubTitle from './SubTitle'

function AboutTools() {
    const tools = [
        {
            icon: <FaReact size={30} className="text-[#61DAFB]" />,
            name: "React.js",
            type: "Frontend Engineering",
            percentage: 95
        },
        {
            icon: <FaJs size={30} className="text-[#F7DF1E]" />,
            name: "JavaScript / TypeScript",
            type: "Core Programming",
            percentage: 92
        },
        {
            icon: <SiTailwindcss size={30} className="text-[#38BDF8]" />,
            name: "TailwindCSS",
            type: "UI / Styling Systems",
            percentage: 95
        },
        {
            icon: <FaFigma size={30} className="text-[#F24E1E]" />,
            name: "Figma",
            type: "UI/UX & Prototyping",
            percentage: 90
        },
        {
            icon: <FaNodeJs size={30} className="text-[#339933]" />,
            name: "Node.js & Express",
            type: "Backend APIs & Databases",
            percentage: 85
        },
        {
            icon: <FaBuilding size={26} className="text-accent" />,
            name: "Real Estate Consulting",
            type: "Valuation, Markets & Negotiation",
            percentage: 90
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 px-4 md:px-[50px] bg-primary flex flex-col gap-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full flex justify-center text-center"
            >
                <div className="max-w-[800px] flex flex-col items-center">
                    <SubTitle 
                        text="My Toolkit"
                        title="Design, develop, deliver: my "
                        titleSpan="essential gear"
                    />
                </div>
            </motion.div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-divider hover:border-accent/20 rounded-2xl p-6 flex flex-col gap-5 hover:bg-white/[0.08] transition-all duration-300 group"
                    >
                        {/* Tool Info Header */}
                        <div className="flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-divider group-hover:scale-110 transition-transform duration-300">
                                {tool.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                                    {tool.name}
                                </h3>
                                <span className="text-white/50 text-xs md:text-sm">
                                    {tool.type}
                                </span>
                            </div>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center text-xs md:text-sm font-semibold text-white/80">
                                <span>Proficiency</span>
                                <span>{tool.percentage}%</span>
                            </div>
                            {/* Outer Bar */}
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                {/* Inner animated Bar */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${tool.percentage}%` }}
                                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="h-full bg-gradient-to-r from-accent-secondary to-accent rounded-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default AboutTools
