import React from 'react'
import * as motion from "motion/react-client"
import { FiChevronRight } from 'react-icons/fi'

function AboutBanner() {
    return (
        <section className="w-full py-16 md:py-24 bg-primary relative overflow-hidden flex flex-col items-center justify-center border-b border-divider">
            {/* Background glowing gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-1 flex flex-col items-center justify-center gap-4 text-center px-4">
                <motion.h1 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white font-bold text-[40px] md:text-[56px] lg:text-[64px] tracking-tight leading-none"
                >
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent">Us</span>
                </motion.h1>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-2 text-white/60 text-sm md:text-base font-medium"
                >
                    <a href="/" className="hover:text-accent transition-colors duration-300">Home</a>
                    <span className="text-accent/50"><FiChevronRight size={16} /></span>
                    <span className="text-white">About Us</span>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutBanner
