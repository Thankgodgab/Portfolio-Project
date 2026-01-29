import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import * as motion from 'motion/react-client'
import SubTitle from '../organisms/SubTitle'
import { HiStar, HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import profileImg from '../../assets/Profile.png'
import { SiAdobe, SiFigma, SiGoogle, SiNetflix, SiSlack, SiSpotify } from 'react-icons/si'

const testimonials = [
    {
        id: 1,
        rating: 4,
        text: "I'm a designer, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-projects. I'm a designer, illustrator, We begin by understanding your vision.",
        author: "Jenny Wilson",
        role: "Web Designer",
        avatar: profileImg
    },
    {
        id: 2,
        rating: 5,
        text: "Working with this team has been a game-changer for our brand. Their attention to detail and creative approach is world-class. Highly recommended for any professional project.",
        author: "Robert Fox",
        role: "Project Manager",
        avatar: profileImg
    },
    {
        id: 3,
        rating: 5,
        text: "The structured workflow and clear communication made the entire process seamless. The final result exceeded our expectations in every possible way. Truly fantastic work.",
        author: "Kristin Watson",
        role: "Startup Founder",
        avatar: profileImg
    }
];

const brands = [
    { name: "Adobe", icon: SiAdobe },
    { name: "Figma", icon: SiFigma },
    { name: "Google", icon: SiGoogle },
    { name: "Netflix", icon: SiNetflix },
    { name: "Slack", icon: SiSlack },
    { name: "Spotify", icon: SiSpotify },
];

function TestimonialSection() {
    const swiperRef = useRef(null);

    return (
        <section className="w-full h-full flex flex-col items-center justify-center px-4 md:px-[80px] py-[100px] gap-16 overflow-hidden">
            <div className="w-full flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Side: Info */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <SubTitle
                            text="Client Reviews"
                            title="See what people are saying "
                            titleSpan="about my work"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-[60px] h-[60px] rounded-full border-4 border-primary overflow-hidden bg-gray-800">
                                    <img src={profileImg} alt="Client" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-white text-[20px] font-bold">1,000+ Happy Clients</h4>
                            <p className="text-white/50 text-[16px]">Work With People And Brands Worldwide.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Swiper Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative bg-[#1D2432]/50 backdrop-blur-sm border border-white/5 rounded-[40px] p-8 md:p-12">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            loop={true}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className="w-full"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col gap-6">
                                        <div className="flex gap-1 text-accent">
                                            {[...Array(5)].map((_, i) => (
                                                <HiStar key={i} size={20} className={i < item.rating ? "text-accent" : "text-white/20"} />
                                            ))}
                                        </div>
                                        <p className="text-white text-[18px] md:text-[22px] leading-relaxed font-medium">
                                            "{item.text}"
                                        </p>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                                                    <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="text-white text-[20px] font-bold">{item.author}</h3>
                                                    <p className="text-white/50 text-[16px]">{item.role}</p>
                                                </div>
                                            </div>

                                            {/* Navigation Buttons inside the card */}
                                            <div className="flex gap-4">
                                                <button
                                                    onClick={() => swiperRef.current?.slidePrev()}
                                                    className="w-[50px] h-[50px] rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"
                                                >
                                                    <HiOutlineArrowLeft size={24} />
                                                </button>
                                                <button
                                                    onClick={() => swiperRef.current?.slideNext()}
                                                    className="w-[50px] h-[50px] rounded-full bg-gradient-to-r from-accent-secondary to-accent flex items-center justify-center text-primary hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                                                >
                                                    <HiOutlineArrowRight size={24} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>
            </div>

            {/* Brands Logo Ticker */}
            <div className="w-full mt-10 border-t border-white/5 pt-[50px]">
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="inline-flex animate-marquee-slow py-4">
                        {[...brands, ...brands, ...brands].map((brand, index) => (
                            <div key={index} className="flex items-center gap-2 mx-12 group grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                <brand.icon size={35} className="text-white" />
                                <span className="text-white text-[24px] font-bold tracking-tight">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
