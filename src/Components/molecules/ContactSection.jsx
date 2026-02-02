import React from 'react'
import * as Motion from 'motion/react-client'
import SubTitle from '../organisms/SubTitle'
import ContactForm from '../organisms/ContactForm'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineArrowNarrowLeft } from "react-icons/hi"

function ContactSection() {
    return (
        <section className="w-full h-full flex flex-col lg:flex-row items-start justify-center px-4 md:px-[80px] py-[100px] gap-16 overflow-hidden relative">
            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
                <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <SubTitle
                        text="Contact Us"
                        title="Get in touch to discuss your "
                        titleSpan="next project"
                    />
                    <p className="text-white/70 text-[18px] leading-relaxed max-w-[550px]">
                        Are you ready to take your project to the next level? Whether you're looking for a new website a web application, or simply need advice.
                    </p>
                </Motion.div>

                <div className="flex flex-col gap-8">
                    {/* Address */}
                    <Motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-5"
                    >
                        <div className="w-[60px] h-[60px] bg-gradient-to-r from-accent-secondary/20 to-accent/20 rounded-full flex items-center justify-center border border-accent/20">
                            <HiOutlineLocationMarker size={30} className="text-accent" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-white text-[20px] font-bold">Address</h4>
                            <p className="text-white/60 text-[16px] leading-relaxed">
                                2972 Westheimer Rd. Santa Ana, New <br /> York, USA
                            </p>
                        </div>
                    </Motion.div>

                    {/* Phone */}
                    <Motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-5"
                    >
                        <div className="w-[60px] h-[60px] bg-gradient-to-r from-accent-secondary/20 to-accent/20 rounded-full flex items-center justify-center border border-accent/20">
                            <HiOutlinePhone size={30} className="text-accent" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h4 className="text-white text-[20px] font-bold">Phone Number</h4>
                            <p className="text-white/60 text-[16px]">
                                +1 (123) 456-789
                            </p>
                        </div>
                    </Motion.div>
                </div>

                {/* Circular Resume Badge */}
                <Motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: true }}
                    className="relative w-[150px] h-[150px] flex items-center justify-center mt-10 md:ml-40"
                >
                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <defs>
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0 " />
                            </defs>
                            <text className="text-[10px] font-bold fill-accent tracking-[2px]">
                                <textPath xlinkHref="#circlePath">
                                    VIEW MY RESUME • VIEW MY RESUME •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="w-[60px] h-[60px] bg-gradient-to-r from-accent-secondary to-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20">
                        <HiOutlineArrowNarrowLeft size={30} className="text-primary" />
                    </div>
                </Motion.div>
            </div>

            {/* Right Side: Form */}
            <Motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
            >
                <ContactForm />
            </Motion.div>
        </section>
    )
}

export default ContactSection
