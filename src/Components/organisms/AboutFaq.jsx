import React, { useState } from 'react'
import * as motion from "motion/react-client"
import { Link } from 'react-router-dom'
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi'
import { siteContent } from '../../constant/websiteContent'

function AboutFaq() {
    const [openIndex, setOpenIndex] = useState(0);
    const { aboutFaq } = siteContent;

    return (
        <section className="w-full h-full flex flex-col lg:flex-row items-start justify-center px-4 md:px-[80px] py-[100px] gap-12 lg:gap-16 overflow-hidden">
            
            {/* Left Side: CTA Card */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-[35%] flex flex-col items-center text-center bg-[#1D2432]/50 backdrop-blur-md border border-white/5 rounded-[40px] p-10 md:p-14"
            >
                <div className="w-[80px] h-[80px] mb-8 text-accent">
                    {/* Minimalist headphone icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    </svg>
                </div>
                
                <h3 className="text-white text-[28px] font-bold leading-tight mb-4">
                    {aboutFaq.ctaTitle}
                </h3>
                <p className="text-white/60 text-[16px] mb-10">
                    {aboutFaq.ctaSubtitle}
                </p>
                
                <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-accent-secondary to-accent text-primary font-bold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                >
                    {aboutFaq.ctaButton}
                </Link>
            </motion.div>

            {/* Right Side: Accordion */}
            <div className="w-full lg:w-[65%] flex flex-col gap-4 mt-8 lg:mt-0">
                {aboutFaq.faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col border ${isOpen ? 'bg-gradient-to-r from-accent-secondary to-accent border-transparent' : 'bg-[#1D2432]/50 border-white/5 hover:border-white/20'} rounded-2xl overflow-hidden transition-colors duration-300`}
                        >
                            <button 
                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-white'}`}
                            >
                                <span className="text-[18px] md:text-[20px] font-bold pr-4">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0">
                                    {isOpen ? (
                                        <HiOutlineX size={24} className="text-primary" />
                                    ) : (
                                        <HiOutlinePlus size={24} className="text-white" />
                                    )}
                                </span>
                            </button>
                            
                            <motion.div
                                initial={false}
                                animate={{ 
                                    height: isOpen ? "auto" : 0,
                                    opacity: isOpen ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className={`p-6 md:p-8 pt-0 text-[16px] leading-relaxed ${isOpen ? 'text-primary/80' : 'text-white/60'}`}>
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                })}
            </div>

        </section>
    )
}

export default AboutFaq
