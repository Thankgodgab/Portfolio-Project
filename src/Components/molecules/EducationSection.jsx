import React from 'react'
import * as motion from 'motion/react-client'
import ExperienceCard from '../organisms/ExperienceCard'
import SubTitle from '../organisms/SubTitle'
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";

const educationData = [
    {
        title: "Harmony Institute",
        subtitle: "Master in Visual Arts",
        date: "2012 - 2014"
    },
    {
        title: "Aurora Academy",
        subtitle: "Bachelor in Visual Arts",
        date: "2008 - 2012"
    },
    {
        title: "Crystalbrook",
        subtitle: "High School",
        date: "1996 - 2008"
    }
];

const workData = [
    {
        title: "Insightlancer",
        subtitle: "Senior Designer",
        date: "2018 - 2024"
    },
    {
        title: "Self-Employed",
        subtitle: "Visual Artist",
        date: "2016 - 2018"
    },
    {
        title: "KG Graphics Studio",
        subtitle: "Web Designer",
        date: "2014 - 2016"
    }
];

function EducationSection() {
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
                    title="Foundation and growth: my "
                    titleSpan="education & work"
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
                        title="Education"
                        icon={HiOutlineAcademicCap}
                        items={educationData}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <ExperienceCard
                        title="Work experience"
                        icon={HiOutlineBriefcase}
                        items={workData}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default EducationSection
