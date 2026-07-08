// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import ServiceCardContent from "../organisms/ServiceCardContent"
import Card from "./Card"

import * as motion from "motion/react-client"
import { siteContent } from '../../constant/websiteContent';

function CardCarousel() {
  const { services } = siteContent;

  return (
    <motion.div 
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
    // viewport={{ once: true }}
    className="w-full flex gap-5 px-[20px]">
      <Swiper
        slidesPerView={4}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        modules={[Pagination]} // Enable Pagination module
      >
        {services.list.map((service, index) => (
          <SwiperSlide key={index} className='mb-[50px]'>
            <Card
                content={<ServiceCardContent icon={service.icon} title={service.title} />}
                className="w-full md:w-[300px] h-[200px] md:h-[250px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default CardCarousel
