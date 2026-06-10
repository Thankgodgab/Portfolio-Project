import React, { useState } from 'react'
import * as Motion from 'motion/react-client'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { HiCheckCircle } from 'react-icons/hi'

const inputBase =
    'w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/30 outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all duration-300'

function ContactForm() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        // Simulate async submit
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1500)
    }

    const fieldVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
        }),
    }

    return (
        <div className="w-full bg-[#1D2432]/50 backdrop-blur-sm border border-white/5 rounded-[40px] p-8 md:p-12 flex flex-col gap-8">
            <Motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-white/70 text-[16px] md:text-[18px] leading-relaxed"
            >
                Fill out the form below to connect with me. I&apos;ll get back to you soon to
                discuss your project or answer any questions.
            </Motion.p>

            {submitted ? (
                /* ── Success State ── */
                <Motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                    className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                >
                    <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-r from-accent-secondary/20 to-accent/20 border border-accent/30 flex items-center justify-center">
                        <HiCheckCircle size={44} className="text-accent" />
                    </div>
                    <h3 className="text-white text-[24px] font-bold">Message Sent!</h3>
                    <p className="text-white/60 text-[16px] max-w-[340px]">
                        Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <Motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSubmitted(false)}
                        className="mt-2 px-8 py-3 rounded-full border border-accent/40 text-accent text-[15px] font-semibold hover:bg-accent/10 transition-all duration-300"
                    >
                        Send Another Message
                    </Motion.button>
                </Motion.div>
            ) : (
                /* ── Contact Form ── */
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    {/* Row 1: First Name + Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Motion.input
                            custom={0}
                            variants={fieldVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="text"
                            placeholder="First Name"
                            required
                            className={inputBase}
                        />
                        <Motion.input
                            custom={1}
                            variants={fieldVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="text"
                            placeholder="Last Name"
                            required
                            className={inputBase}
                        />
                    </div>

                    {/* Row 2: Email + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Motion.input
                            custom={2}
                            variants={fieldVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="email"
                            placeholder="Email Address"
                            required
                            className={inputBase}
                        />
                        <Motion.input
                            custom={3}
                            variants={fieldVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            type="tel"
                            placeholder="Phone Number"
                            className={inputBase}
                        />
                    </div>

                    {/* Row 3: Subject (full width) */}
                    <Motion.input
                        custom={4}
                        variants={fieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        type="text"
                        placeholder="Subject"
                        required
                        className={inputBase}
                    />

                    {/* Row 4: Message */}
                    <Motion.textarea
                        custom={5}
                        variants={fieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        placeholder="Tell me about your project..."
                        rows="5"
                        required
                        className={`${inputBase} resize-none`}
                    />

                    {/* Submit */}
                    <Motion.div
                        custom={6}
                        variants={fieldVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group flex items-center gap-3 w-fit bg-gradient-to-r from-accent-secondary to-accent px-10 py-4 rounded-full text-primary font-bold text-[16px] md:text-[18px] shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-primary/40 border-t-primary rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Motion.span
                                        className="inline-flex"
                                        initial={{ x: 0 }}
                                        whileHover={{ x: 5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <HiOutlineArrowNarrowRight size={22} />
                                    </Motion.span>
                                </>
                            )}
                        </Motion.button>
                    </Motion.div>
                </form>
            )}
        </div>
    )
}

export default ContactForm
