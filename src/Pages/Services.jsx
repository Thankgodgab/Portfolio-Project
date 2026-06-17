import React from 'react'
import * as motion from 'motion/react-client'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { AiOutlineAndroid } from 'react-icons/ai'
import { 
  IoDiamondOutline, 
  IoBrushOutline, 
  IoCodeSlashOutline, 
  IoBulbOutline, 
  IoCartOutline 
} from 'react-icons/io5'
import { HiOutlineVideoCamera, HiOutlineAdjustments } from 'react-icons/hi'

// Import matching subcomponents
import ServicesBanner from '../Components/organisms/ServicesBanner'
import Carousel from '../Components/organisms/Carousel'
import AboutExpertise from '../Components/organisms/AboutExpertise'
import TestimonialSection from '../Components/molecules/TestimonialSection'
import ContactSection from '../Components/molecules/ContactSection'

const servicesList = [
  {
    icon: <AiOutlineAndroid size={36} className="text-accent" />,
    title: "Mobile App Design & Development",
    description: "Creating high-performing, feature-rich, and user-friendly mobile applications tailored to your business goals."
  },
  {
    icon: <IoDiamondOutline size={36} className="text-accent" />,
    title: "UI/UX Design System Creation",
    description: "Designing comprehensive, scalable visual design systems to maintain product consistency and enhance developer handoff."
  },
  {
    icon: <IoBrushOutline size={36} className="text-accent" />,
    title: "Branding And Visual Identity",
    description: "Crafting memorable logos, brand identity guidelines, and visual assets that effectively communicate your company values."
  },
  {
    icon: <IoBulbOutline size={36} className="text-accent" />,
    title: "Consultation And Strategy",
    description: "Analyzing target markets, identifying opportunities, and defining strategic paths for launching successful digital products."
  },
  {
    icon: <HiOutlineVideoCamera size={36} className="text-accent" />,
    title: "Video Production Services",
    description: "Creating engaging promotional videos, corporate messages, and animations to showcase your product features."
  },
  {
    icon: <HiOutlineAdjustments size={36} className="text-accent" />,
    title: "Motion Graphics and Animation",
    description: "Animating UI mockups, designing micro-interactions, and rendering high-quality motion graphics that bring layouts to life."
  },
  {
    icon: <IoCodeSlashOutline size={36} className="text-accent" />,
    title: "Content Creation And Strategy",
    description: "Writing copy, designing visual assets, and optimizing strategic content campaigns that align with your digital platform goals."
  },
  {
    icon: <IoCartOutline size={36} className="text-accent" />,
    title: "ECommerce Design & Development",
    description: "Building responsive, secure, and user-friendly e-commerce online stores to optimize checkout conversion and sales."
  }
];

function Services() {
  return (
    <div className="w-full flex flex-col bg-primary min-h-screen text-white">
      {/* Top Banner */}
      <ServicesBanner />

      {/* Marquee Ticker */}
      <Carousel />

      {/* Services Grid Section */}
      <section className="w-full px-4 md:px-[80px] py-[100px] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Section Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center flex flex-col gap-4 mb-16 max-w-[800px]"
        >
          <span className="text-accent uppercase tracking-widest text-sm font-semibold">My Specialization</span>
          <h2 className="text-white text-[32px] md:text-[45px] lg:text-[50px] font-bold leading-[1.2] tracking-tight">
            Innovative best design and <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent">development services</span>
          </h2>
          <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed">
            As a skilled Product Designer and Developer, I offer a range of services tailored to help you create exceptional digital products and experiences.
          </p>
        </motion.div>

        {/* 8-Card Grid Layout */}
        <div className="w-full max-w-[1280px]">
          <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-[40px] p-8 flex flex-col gap-8 hover:border-accent/30 hover:bg-white/[0.08] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-secondary to-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/10">
                    <IoIosArrowRoundForward size={32} className="text-primary rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-white text-[22px] md:text-[24px] font-bold group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise progress bar section */}
      <AboutExpertise />

      {/* Client Reviews Section */}
      <TestimonialSection />

      {/* Contact Us Section */}
      <ContactSection />
    </div>
  )
}

export default Services