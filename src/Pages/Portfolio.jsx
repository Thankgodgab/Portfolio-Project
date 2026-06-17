import React, { useState } from 'react'
import * as motion from 'motion/react-client'
import PortfolioBanner from '../Components/organisms/PortfolioBanner'
import PortfolioCard from '../Components/molecules/PortfolioCard'
import ContactSection from '../Components/molecules/ContactSection'

// Import portfolio images
import portfolio1 from '../assets/Portfolio-1.png'
import portfolio2 from '../assets/Portfolio-2.png'

const portfolioData = [
  {
    id: 1,
    image: portfolio1,
    title: "Volunteer Website Template",
    category: "Web Design",
    link: "https://volunteer-template.example.com"
  },
  {
    id: 2,
    image: portfolio2,
    title: "Digital Marketing Website Template",
    category: "UI / UX Design",
    link: "https://marketing-template.example.com"
  },
  {
    id: 3,
    image: portfolio1,
    title: "Travel Website Template",
    category: "Web Development",
    link: "https://travel-template.example.com"
  },
  {
    id: 4,
    image: portfolio2,
    title: "Mobile App Design User Journeys",
    category: "UI / UX Design",
    link: "https://mobile-app-design.example.com"
  },
  {
    id: 5,
    image: portfolio1,
    title: "E-Commerce Web Application",
    category: "Web Development",
    link: "https://ecommerce.example.com"
  },
  {
    id: 6,
    image: portfolio2,
    title: "Revamping a Brand Identity",
    category: "Web Design",
    link: "https://brand-identity.example.com"
  }
];

const categories = ["All", "UI / UX Design", "Web Design", "Web Development"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter(project => project.category === activeCategory);

  return (
    <div className="w-full flex flex-col bg-primary min-h-screen text-white">
      {/* Top Banner */}
      <PortfolioBanner />

      {/* Main Portfolio Grid Section */}
      <section className="w-full px-4 md:px-[80px] py-[80px] flex flex-col items-center justify-center overflow-hidden">
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16 max-w-full"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-[15px] md:text-[16px] font-semibold border transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-accent-secondary to-accent text-primary border-transparent shadow-lg shadow-accent/20"
                  : "bg-white/5 text-white/80 border-white/10 hover:border-accent/40 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="w-full max-w-[1280px]">
          <motion.div 
            layout
            className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <PortfolioCard
                  image={project.image}
                  title={project.title}
                  category={project.category}
                  link={project.link}
                  className="bg-[#1D2432]/30 p-4 rounded-[48px] border border-white/5 hover:border-white/10 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action (Contact) Section */}
      <ContactSection />
    </div>
  )
}

export default Portfolio
