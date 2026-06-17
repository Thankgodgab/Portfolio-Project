import React from 'react'
import * as motion from 'motion/react-client'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function PortfolioBanner() {
    return (
        <section className="w-full py-16 md:py-24 bg-primary relative overflow-hidden flex flex-col items-center justify-center border-b border-divider">
            {/* Ambient glow orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[350px] h-[350px] bg-accent/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Decorative corner accent lines */}
            <div className="absolute top-8 left-8 w-[60px] h-[60px] border-t-2 border-l-2 border-accent/20 rounded-tl-lg pointer-events-none" />
            <div className="absolute bottom-8 right-8 w-[60px] h-[60px] border-b-2 border-r-2 border-accent/20 rounded-br-lg pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center gap-5 text-center px-4">
                {/* Page heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-white font-bold text-[40px] md:text-[56px] lg:text-[64px] tracking-tight leading-none"
                >
                    Our{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent">
                        Portfolio
                    </span>
                </motion.h1>

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="flex items-center gap-2 text-white/60 text-sm md:text-base font-medium"
                >
                    <Link to="/" className="hover:text-accent transition-colors duration-300">
                        Home
                    </Link>
                    <span className="text-accent/50">
                        <FiChevronRight size={16} />
                    </span>
                    <span className="text-white">Portfolio</span>
                </motion.div>
            </div>
        </section>
    )
}

export default PortfolioBanner
