import React from 'react'
import * as motion from "motion/react-client"
import profileImage from "../../assets/about-us-img-1.jpeg"
import { HiOutlineCode, HiOutlinePencil, HiOutlineOfficeBuilding, HiOutlineVideoCamera } from 'react-icons/hi'

function AboutExpertise() {
    const expertise = [
        {
            title: "UI/UX Design",
            percentage: 90,
            icon: <HiOutlinePencil size={24} className="text-accent" />
        },
        {
            title: "Web Development",
            percentage: 95,
            icon: <HiOutlineCode size={24} className="text-accent" />
        },
        {
            title: "Content Creation",
            percentage: 85,
            icon: <HiOutlineVideoCamera size={24} className="text-accent" />
        },
        {
            title: "Real Estate Consulting",
            percentage: 90,
            icon: <HiOutlineOfficeBuilding size={24} className="text-accent" />
        }
    ];

    return (
        <section className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-[80px] py-[100px] gap-16 overflow-hidden">
            
            {/* Left Side: Image with Floating Badge */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-[45%] relative flex justify-center"
            >
                <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10">
                    <img 
                        src={profileImage} 
                        alt="Expertise" 
                        className="w-full h-full object-center grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                </div>

                {/* Floating Badge */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-8 lg:bottom-10 lg:-right-8 bg-gradient-to-br from-accent-secondary to-accent rounded-full w-[160px] h-[160px] md:w-[200px] md:h-[200px] flex flex-col items-center justify-center shadow-xl shadow-accent/20 z-10 p-4 text-center text-primary"
                >
                    <h3 className="text-4xl md:text-5xl font-extrabold mb-1">12+</h3>
                    <p className="text-sm md:text-base font-semibold leading-tight">Years<br/>Experience</p>
                </motion.div>
            </motion.div>

            {/* Right Side: Content & Progress Bars */}
            <div className="w-full lg:w-[55%] flex flex-col gap-10 mt-10 lg:mt-0 lg:pl-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="text-white text-[32px] md:text-[45px] lg:text-[50px] font-bold leading-[1.2] tracking-tight">
                        Mastering creativity across <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent">diverse projects</span>
                    </h2>
                    <p className="text-white/70 text-[18px] leading-relaxed">
                        I excel in delivering innovative and tailored creative solutions, showcasing expertise across diverse projects to meet unique client needs and exceed expectations.
                    </p>
                </motion.div>

                {/* Progress Bars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-5 hover:border-accent/30 hover:bg-white/[0.08] transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-white text-[18px] font-bold">{item.title}</h3>
                                <span className="ml-auto text-accent font-bold">{item.percentage}%</span>
                            </div>

                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.percentage}%` }}
                                    transition={{ duration: 1.2, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="h-full bg-gradient-to-r from-accent-secondary to-accent rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default AboutExpertise
