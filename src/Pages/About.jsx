import React from 'react'
import AboutBanner from '../Components/organisms/AboutBanner'
import Carousel from '../Components/organisms/Carousel'
import AboutSection from '../Components/molecules/AboutSection'
import AboutApproach from '../Components/organisms/AboutApproach'
import AboutFeatures from '../Components/organisms/AboutFeatures'
import AboutTools from '../Components/organisms/AboutTools'
import AboutExpertise from '../Components/organisms/AboutExpertise'
import TestimonialSection from '../Components/molecules/TestimonialSection'
import AboutFaq from '../Components/organisms/AboutFaq'
import ContactSection from '../Components/molecules/ContactSection'

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

            {/* Expertise & Skills */}
            <AboutExpertise />

            {/* Client Reviews */}
            <TestimonialSection />

            {/* Frequently Asked Questions */}
            <AboutFaq />

            {/* Contact Us Section */}
            <ContactSection />
        </div>
    )
}

export default About