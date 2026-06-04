import React from 'react'
import * as motion from "motion/react-client"
import { PiTarget, PiEye, PiTrophy, PiPlayBold } from 'react-icons/pi'
import SubTitle from './SubTitle'
import Card from '../molecules/Card'

function AboutApproach() {
    const approaches = [
        {
            icon: <PiTarget size={40} className="text-accent" />,
            title: "Our Mission",
            desc: "To deliver top-tier web solutions and strategic real estate guidance that empower clients to scale their digital footprint and grow physical wealth."
        },
        {
            icon: <PiEye size={40} className="text-accent" />,
            title: "Our Vision",
            desc: "To be a trusted partner in Nigeria and beyond, bridging technology and property development to foster long-term financial success and innovation."
        },
        {
            icon: <PiTrophy size={40} className="text-accent" />,
            title: "Our Goal",
            desc: "To provide clean code, transparent property consulting, and client-centric solutions that exceed expectations and build lifelong partnerships."
        }
    ];

    const stats = [
        { value: "50+", label: "Projects Completed" },
        { value: "2+", label: "Years of Experience" },
        { value: "100+", label: "Satisfied Clients" },
        { value: "99%", label: "Success Rate" }
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
                        text="Our Approach"
                        title="Designing success with a strategic "
                        titleSpan="framework"
                    />
                </div>
            </motion.div>

            {/* Mission, Vision, Goal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {approaches.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <Card 
                            className="h-full text-left items-start p-8 border border-divider hover:border-accent/30 hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden group"
                            content={
                                <div className="flex flex-col gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-divider group-hover:bg-gradient-to-r group-hover:from-accent-secondary group-hover:to-accent group-hover:text-primary transition-all duration-300">
                                        <div className="group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            }
                        />
                    </motion.div>
                ))}
            </div>

            {/* Video Mockup Section with Statistics */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
                {/* Media Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden relative group border border-divider"
                >
                    {/* Background image mockup representing work */}
                    <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80')] filter brightness-50 group-hover:scale-105 transition-transform duration-700" />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />

                    {/* Glowing ripple play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-accent/20 opacity-75"></span>
                            <span className="animate-pulse absolute inline-flex h-16 w-16 rounded-full bg-accent/40 opacity-75"></span>
                            <button className="relative w-14 h-14 rounded-full bg-gradient-to-r from-accent-secondary to-accent text-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                <PiPlayBold size={20} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Container */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 w-full grid grid-cols-2 gap-6"
                >
                    {stats.map((stat, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white/5 border border-divider rounded-2xl p-6 flex flex-col justify-center items-start group hover:border-accent-secondary/30 transition-all duration-300"
                        >
                            <span className="text-[36px] md:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent group-hover:scale-105 transition-transform duration-300 origin-left">
                                {stat.value}
                            </span>
                            <span className="text-white/60 text-sm md:text-base font-semibold mt-1">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default AboutApproach
