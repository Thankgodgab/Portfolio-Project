import React from 'react'
import * as Motion from 'motion/react-client'
import SubTitle from '../organisms/SubTitle'
import ContactForm from '../organisms/ContactForm'
import {
    HiOutlineLocationMarker,
    HiOutlinePhone,
    HiOutlineMail,
} from 'react-icons/hi'

const contactInfo = [
    {
        icon: HiOutlinePhone,
        label: 'Phone Number',
        value: '+1 (123) 456-789',
        href: 'tel:+1123456789',
    },
    {
        icon: HiOutlineMail,
        label: 'Email Address',
        value: 'info@domain.com',
        href: 'mailto:info@domain.com',
    },
    {
        icon: HiOutlineLocationMarker,
        label: 'Office Address',
        value: '2972 Westheimer Rd. Santa Ana,\nNew York, USA',
        href: null,
    },
]

function ContactSection() {
    return (
        <section className="w-full relative overflow-hidden px-4 md:px-[80px] py-[100px]">
            {/* Ambient background glows */}
            <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-accent-secondary/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col lg:flex-row items-start justify-center gap-16">
                {/* ── Left Column: Info ── */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10">

                    {/* Section heading */}
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
                        <p className="text-white/70 text-[17px] leading-relaxed max-w-[520px]">
                            Are you ready to take your project to the next level? Whether
                            you&apos;re looking for a new website, a web application, or simply
                            need advice — I&apos;m here to help.
                        </p>
                    </Motion.div>

                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-6">
                        {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                            <Motion.div
                                key={label}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                {href ? (
                                    <a
                                        href={href}
                                        className="group flex items-start gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-accent/20 transition-all duration-300"
                                    >
                                        <ContactInfoContent Icon={Icon} label={label} value={value} />
                                    </a>
                                ) : (
                                    <div className="flex items-start gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.03]">
                                        <ContactInfoContent Icon={Icon} label={label} value={value} />
                                    </div>
                                )}
                            </Motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Right Column: Form ── */}
                <Motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <ContactForm />
                </Motion.div>
            </div>
        </section>
    )
}

/* ── Sub-component for card content ── */
function ContactInfoContent({ Icon, label, value }) {
    return (
        <>
            <div className="flex-shrink-0 w-[56px] h-[56px] bg-gradient-to-r from-accent-secondary/20 to-accent/20 rounded-full flex items-center justify-center border border-accent/20">
                <Icon size={26} className="text-accent" />
            </div>
            <div className="flex flex-col gap-1">
                <h4 className="text-white text-[17px] font-bold">{label}</h4>
                <p className="text-white/60 text-[15px] leading-relaxed whitespace-pre-line">
                    {value}
                </p>
            </div>
        </>
    )
}

export default ContactSection
