import React from 'react'
import SubTitle from './SubTitle'
import * as motion from "motion/react-client"
import { PiEnvelopeSimpleThin, PiPhoneThin } from 'react-icons/pi'
import Card from '../molecules/Card'
import { siteContent } from '../../constant/websiteContent'

function AboutContent() {
    const { about } = siteContent;

    return (
        <div className="flex flex-col items-start justify-start w-full md:w-1/2 h-full gap-5">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                viewport={{ once: true }}
                className="w-full flex flex-col gap-4">
                <SubTitle
                    text="About Me"
                    title={about.title}
                    titleSpan={about.titleSpan}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                viewport={{ once: true }}
                className="w-full flex flex-col gap-4">
                <div className="text-[18px] font-normal text-white">
                    {about.paragraphs.map((paragraph, index) => (
                        <p key={index} className={index > 0 ? 'mt-2' : ''}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
                viewport={{ once: true }}
                className="w-full flex flex-col gap-4">
                <div className="w-full flex flex-col md:flex-row gap-10 justify-between items-start">
                    <div className="w-full md:w-1/2 h-full flex flex-col gap-2.5">
                        <div className="w-full h-1/2 flex gap-2 group border-b-divider border-b-2 py-5">
                            <div className="text-accent/50 group-hover:text-accent transition-colors duration-300">
                                <PiEnvelopeSimpleThin
                                    size={50}
                                    className=''
                                />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-sm font-normal capitalize text-white">{about.contact.emailText}</span>
                                <span className="text-sm font-semibold text-white">
                                    <a href={`mailto:${about.contact.email}`}>{about.contact.email}</a>
                                </span>
                            </div>
                        </div>
                        <div className="w-full h-1/2 flex gap-2 py-5 group">
                            <div className="text-accent/50 group-hover:text-accent transition-colors duration-300">
                                <PiPhoneThin
                                    size={50}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                                <span className="text-sm font-normal capitalize text-white">{about.contact.phoneText}</span>
                                <span className="text-sm font-semibold text-white">
                                    <a href={`tel:${about.contact.phone}`}>{about.contact.phone}</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-full flex self-center items-end justify-end">
                        <Card
                            className="w-full "
                            content={
                                <div className='w-full h-full flex flex-col justify-start items-start'>
                                    <h3 className='text-[64px] font-semibold text-accent'>{about.experienceStat}</h3>
                                    <span className='text-lg font-normal text-white'>{about.experienceText}</span>
                                </div>
                            }
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutContent