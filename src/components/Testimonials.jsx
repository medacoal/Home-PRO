import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import Swiper's autoplay CSS
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import TestimonialCard from "../components/cards/TestimonialCard"

export default function Testimonial({data}) {
    return (
     <div className='bg-[]'>
       <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className=""
      >
        {data && data.map((slide) => (
          <SwiperSlide key={slide._id}>
            <TestimonialCard {...slide}/>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    );
  }

