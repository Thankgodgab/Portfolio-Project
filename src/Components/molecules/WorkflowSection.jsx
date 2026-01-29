import React, { useState } from 'react'
import * as motion from 'motion/react-client'
import SubTitle from '../organisms/SubTitle'
import SpanText from '../organisms/SpanText'
import heroImg from '../../assets/hero-img.png'
import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from "react-icons/hi";

const workflowSteps = [
    {
        id: 1,
        title: "1. Discovery and Planning",
        description: "We begin by understanding your vision, goal & requirement. Through collaborative discussions and research, we define the project scope and strategy."
    },
    {
        id: 2,
        title: "2. Design and Development",
        description: "We begin by understanding your vision, goal & requirement. Through collaborative discussions and research."
    },
    {
        id: 3,
        title: "3. Delivery and Support",
        description: "After rigorous testing, we deliver the final product and provide ongoing support to ensure everything runs smoothly and efficiently."
    }
];

function WorkflowSection() {
    const [openIndex, setOpenIndex] = useState(1); // Defaulting to the second item open as in image

    return (
        <section className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-[80px] py-[100px] gap-16 overflow-hidden">
            {/* Left Side: Image */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 aspect-[4/4.5] rounded-[60px] overflow-hidden"
            >
                <img
                    src={heroImg}
                    alt="Workflow Illustration"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4"
                >
                    <SubTitle
                        text="How it work"
                        title="the structured workflow behind "
                        titleSpan="our success"
                    />
                    <p className="text-white/70 text-[18px] leading-relaxed max-w-[550px]">
                        Hi, I'm James, a passionate <span className="text-accent font-medium border-b border-accent/30 cursor-pointer hover:border-accent transition-all">UI/UX designer</span> who thrives on turning ideas into visually stunning realities. With a love for creativity and a meticulous eye for detail.
                    </p>
                </motion.div>

                {/* Accordion Steps */}
                <div className="flex flex-col border-t border-white/10 mt-4">
                    {workflowSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className="border-b border-white/10 py-6 cursor-pointer group"
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        >
                            <div className="flex items-center justify-between gap-4">
                                <h3 className={`text-[22px] md:text-[26px] font-bold transition-all duration-300 ${openIndex === index ? 'text-accent' : 'text-white group-hover:text-accent/80'}`}>
                                    {step.title}
                                </h3>
                                <div className={`text-white/50 transition-all duration-300 ${openIndex === index ? 'rotate-180 text-accent' : ''}`}>
                                    {openIndex === index ? <HiOutlineArrowNarrowDown size={24} /> : <HiOutlineArrowNarrowUp size={24} />}
                                </div>
                            </div>

                            {/* Animated Description */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[200px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkflowSection
