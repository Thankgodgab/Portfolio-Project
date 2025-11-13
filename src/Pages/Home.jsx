import AboutSection from "../Components/molecules/AboutSection";
import Hero from "../Components/molecules/Hero";
import PortfolioSection from "../Components/molecules/PortfolioSection";
import ServicesSection from "../Components/molecules/ServicesSection";
import SkillSection from "../Components/molecules/SkillSection";
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
        </div>
        </>
    )
}

export default Home;