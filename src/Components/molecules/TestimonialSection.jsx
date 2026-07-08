import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import * as motion from 'motion/react-client'
import SubTitle from '../organisms/SubTitle'
import { HiStar, HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { siteContent } from '../../constant/websiteContent';

function TestimonialSection() {
    const { testimonials } = siteContent;
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
                            title={testimonials.title}
                            titleSpan={testimonials.titleSpan}
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
                            {testimonials.clientImages.map((img, i) => (
                                <div key={i} className="w-[60px] h-[60px] rounded-full border-4 border-primary overflow-hidden bg-gray-800">
                                    <img src={img} alt="Client" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-white text-[20px] font-bold">{testimonials.statsTitle}</h4>
                            <p className="text-white/50 text-[16px]">{testimonials.statsSubtitle}</p>
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
                    <div className="relative bg-[#1D2432]/50 backdrop-blur-sm border border-white/5 rounded-[40px] p-5 md:p-12">
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
                            {testimonials.reviews.map((item) => (
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
                                                <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full overflow-hidden">
                                                    <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="text-white text-[16px] md:text-[20px] font-bold">{item.author}</h3>
                                                    <p className="text-white/50 text-[12px] md:text-[16px]">{item.role}</p>
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
                        {[...testimonials.brands, ...testimonials.brands, ...testimonials.brands].map((brand, index) => (
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
