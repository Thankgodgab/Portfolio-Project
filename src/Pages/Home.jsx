import AboutSection from "../Components/molecules/AboutSection";
import Hero from "../Components/molecules/Hero";
import PortfolioSection from "../Components/molecules/PortfolioSection";
import ServicesSection from "../Components/molecules/ServicesSection";
import SkillSection from "../Components/molecules/SkillSection";
import EducationSection from "../Components/molecules/EducationSection";
import WorkflowSection from "../Components/molecules/WorkflowSection";
import TestimonialSection from "../Components/molecules/TestimonialSection";
import ContactSection from "../Components/molecules/ContactSection";
import Footer from "../Components/molecules/Footer";
import Carousel from "../Components/organisms/Carousel";

function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-start px-2">
                <Hero />
                <Carousel />
                <ServicesSection />
                <AboutSection />
                <SkillSection />
                <PortfolioSection />
                <EducationSection />
                <WorkflowSection />
                <TestimonialSection />
                <ContactSection />
            </div>
        </>
    )
}

export default Home;




