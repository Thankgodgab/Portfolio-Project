import AboutSection from "../Components/molecules/AboutSection";
import Hero from "../Components/molecules/Hero";
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
        </div>
        </>
    )
}

export default Home;