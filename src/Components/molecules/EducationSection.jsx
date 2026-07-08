import React from 'react'
import * as motion from 'motion/react-client'
import ExperienceCard from '../organisms/ExperienceCard'
import SubTitle from '../organisms/SubTitle'
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import { siteContent } from '../../constant/websiteContent';

function EducationSection() {
    const { educationAndWork } = siteContent;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-[80px] py-[100px] overflow-hidden">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full flex justify-center mb-16 text-center"
            >
                <SubTitle
                    text="Education & Work"
                    title={educationAndWork.title}
                    titleSpan={educationAndWork.titleSpan}
                />
            </motion.div>

            {/* Experience Cards Grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <ExperienceCard
                        title={educationAndWork.educationTitle}
                        icon={HiOutlineAcademicCap}
                        items={educationAndWork.educationList}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <ExperienceCard
                        title={educationAndWork.workTitle}
                        icon={HiOutlineBriefcase}
                        items={educationAndWork.workList}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default EducationSection
