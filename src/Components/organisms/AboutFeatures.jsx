import React from 'react'
import * as motion from "motion/react-client"
import { PiCodeThin, PiBuildingsThin, PiUsersThin } from 'react-icons/pi'
import SubTitle from './SubTitle'
import CtaBtn from './CtaBtn'

function AboutFeatures() {
    const features = [
        {
            icon: <PiCodeThin size={36} />,
            title: "Custom Web Engineering",
            desc: "Engineering high-performance web applications using React, Node.js, and modern tools to automate workflows and drive conversions."
        },
        {
            icon: <PiBuildingsThin size={36} />,
            title: "Strategic Property Advisory",
            desc: "Expert guidance in real estate acquisitions, property analysis, and wealth creation across Nigeria's dynamic real estate sector."
        },
        {
            icon: <PiUsersThin size={36} />,
            title: "User-Centric Design",
            desc: "Designing clean, responsive, and accessible interfaces that engage users and optimize their digital experience."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 px-4 md:px-[50px] bg-primary/30 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Column - Heading & Call to Action */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 items-start text-left"
                >
                    <SubTitle 
                        text="Our Unique Capabilities"
                        title="Showcasing excellence through my "
                        titleSpan="specialized services"
                    />
                    <p className="text-white/70 text-base md:text-lg leading-relaxed mt-2">
                        I offer a rare combination of custom software development and strategic real estate advisory. Whether you need to scale your online presence or identify high-yield investment properties in Nigeria, my structured methodology ensures precision, speed, and profitability.
                    </p>
                    <div className="mt-4">
                        <a href="/contact">
                            <CtaBtn text="Get In Touch" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Column - Features List */}
                <div className="flex flex-col gap-6 w-full">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="w-full p-6 md:p-8 bg-white/5 border border-divider hover:border-accent/30 rounded-2xl flex flex-col md:flex-row gap-6 items-start group hover:bg-white/[0.08] transition-all duration-300"
                        >
                            {/* Icon wrapper */}
                            <div className="w-14 h-14 shrink-0 rounded-xl bg-white/5 border border-divider flex items-center justify-center text-accent group-hover:bg-gradient-to-r group-hover:from-accent-secondary group-hover:to-accent group-hover:text-primary transition-all duration-300">
                                {item.icon}
                            </div>
                            
                            {/* Description wrapper */}
                            <div className="flex flex-col gap-2 text-left">
                                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutFeatures
