import React from 'react'
import AboutBanner from '../Components/organisms/AboutBanner'
import Carousel from '../Components/organisms/Carousel'
import AboutSection from '../Components/molecules/AboutSection'
import AboutApproach from '../Components/organisms/AboutApproach'
import AboutFeatures from '../Components/organisms/AboutFeatures'
import AboutTools from '../Components/organisms/AboutTools'

function About() {
    return (
        <div className="w-full flex flex-col bg-primary min-h-screen text-white">
            {/* Header Banner */}
            <AboutBanner />

            {/* Marquee Ticker */}
            <Carousel />

            {/* Main Profile Info Section */}
            <div className="py-12 md:py-16">
                <AboutSection />
            </div>

            {/* Mission, Vision, Goals & Stats Section */}
            <AboutApproach />

            {/* Capabilities and Strengths Section */}
            <AboutFeatures />

            {/* Tools and Skills Section */}
            <AboutTools />
        </div>
    )
}

export default About