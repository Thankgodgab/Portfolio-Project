import React from 'react'
import ContactBanner from '../Components/organisms/ContactBanner'
import Carousel from '../Components/organisms/Carousel'
import ContactSection from '../Components/molecules/ContactSection'

function Contact() {
    return (
        <div className="w-full flex flex-col bg-primary min-h-screen text-white">
            {/* Hero Banner — heading + breadcrumb */}
            <ContactBanner />

            {/* Marquee Ticker Strip */}
            <Carousel />

            {/* Two-column contact layout: info cards + form */}
            <ContactSection />
        </div>
    )
}

export default Contact