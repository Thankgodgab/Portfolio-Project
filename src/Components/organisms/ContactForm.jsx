import React from 'react'
import * as Motion from 'motion/react-client'

function ContactForm() {
    return (
        <div className="w-full bg-[#1D2432]/50 backdrop-blur-sm border border-white/5 rounded-[40px] p-8 md:p-12 flex flex-col gap-8">
            <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed">
                Fill out the form below to connect with me. I'll get back to you soon to discuss your project or answer any questions.
            </p>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/30 outline-none focus:border-accent/50 transition-all duration-300"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/30 outline-none focus:border-accent/50 transition-all duration-300"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/30 outline-none focus:border-accent/50 transition-all duration-300"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/30 outline-none focus:border-accent/50 transition-all duration-300"
                    />
                </div>

                <textarea
                    placeholder="Message"
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/30 outline-none focus:border-accent/50 transition-all duration-300 resize-none"
                ></textarea>

                <Motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-fit bg-gradient-to-r from-accent-secondary to-accent px-10 py-4 rounded-full text-primary font-bold text-[18px] shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
                >
                    Submit Message
                </Motion.button>
            </form>
        </div>
    )
}

export default ContactForm
