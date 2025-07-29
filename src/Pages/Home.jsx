import Hero from "../Components/molecules/Hero";
import ServicesSection from "../Components/molecules/ServicesSection";
import Carousel from "../Components/organisms/Carousel";

function Home() {
    return (
        <>
            <Hero />
            <Carousel />
            <ServicesSection />
        </>
    )
}

export default Home;