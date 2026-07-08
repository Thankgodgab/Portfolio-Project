import React from 'react'
import * as Motion from 'motion/react-client'
import { FaArrowUp } from 'react-icons/fa'
import { siteContent } from '../../constant/websiteContent'

function Footer() {
    const { footer } = siteContent;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full min-h-[90vh] bg-gradient-to-br from-accent-secondary to-accent px-4 md:px-[80px] pt-[60px] pb-10 flex flex-col justify-between overflow-hidden">
            {/* Top CTA Section */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 border-b border-black/10 pb-20">
                <div className="flex flex-col gap-4 max-w-[700px]">
                    <Motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-primary text-[45px] md:text-[50px] font-black leading-tight tracking-tighter"
                    >
                        {footer.heading}
                    </Motion.h2>
                    <Motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-primary/70 text-[18px] md:text-[22px] font-medium"
                    >
                        {footer.subheading}
                    </Motion.p>
                </div>

                {/* Circular "GET STARTED" Badge */}
                <Motion.div
                    initial={{ opacity: 0, rotate: -45 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: true }}
                    className="relative w-[180px] h-[180px] flex items-center justify-center cursor-pointer group shrink-0"
                >
                    <div className="absolute inset-0 animate-[spin_12s_linear_infinite] group-hover:pause-animation">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <defs>
                                <path id="footerCirclePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0 " />
                            </defs>
                            <circle cx="50" cy="50" r="48" fill="#111827" />
                            <text className="text-[12px] font-bold fill-accent tracking-[3.5px]">
                                <textPath xlinkHref="#footerCirclePath">
                                    {footer.ctaBadgeText}
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="w-[70px] h-[70px] bg-accent rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
                        <FaArrowUp size={28} className="text-primary rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                </Motion.div>
            </div>

            {/* Bottom Footer Section */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-[30px]">
                {/* Logo & Info */}
                <div className="flex flex-col gap-8">
                    <img src={footer.logo} alt="Logo" className="w-[140px] h-auto" />
                    <p className="text-primary/70 text-[16px] leading-relaxed">
                        {footer.description}
                    </p>
                    <div className="flex gap-4">
                        {footer.socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="w-[45px] h-[45px] bg-primary rounded-full flex items-center justify-center text-accent hover:bg-primary/90 hover:scale-110 transition-all duration-300"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Link Columns */}
                <div className="flex flex-col gap-8">
                    <h4 className="text-primary text-[22px] font-bold">{footer.links.quickLinks.title}</h4>
                    <div className="flex flex-col gap-4">
                        {footer.links.quickLinks.items.map((link, index) => (
                            <a key={index} href={link.href} className="text-primary/70 text-[16px] hover:text-primary hover:translate-x-2 transition-all duration-300 w-fit">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h4 className="text-primary text-[22px] font-bold">{footer.links.services.title}</h4>
                    <div className="flex flex-col gap-4">
                        {footer.links.services.items.map((link, index) => (
                            <a key={index} href={link.href} className="text-primary/70 text-[16px] hover:text-primary hover:translate-x-2 transition-all duration-300 w-fit">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h4 className="text-primary text-[22px] font-bold">{footer.links.viewMyWork.title}</h4>
                    <div className="flex flex-col gap-4">
                        {footer.links.viewMyWork.items.map((link, index) => (
                            <a key={index} href={link.href} className="text-primary/70 text-[16px] hover:text-primary hover:translate-x-2 transition-all duration-300 w-fit">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full text-center border-t border-black/10 pt-10">
                <p className="text-primary/60 text-[16px]">
                    Copyright © {currentYear} {footer.copyright}
                </p>
            </div>
        </footer>
    )
}

export default Footer
