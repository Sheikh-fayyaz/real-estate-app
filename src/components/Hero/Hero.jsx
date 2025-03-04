// src/components/Hero.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Hero.css'

// Import images
import hero1 from '../../assets/images/hero/1.jpg';
import hero2 from '../../assets/images/hero/2.jpg';

const slidesData = [
  {
    id: 1,
    bgImage: hero1,
    titleLight: 'Luxurious',
    titleBold: 'mansion'
  },
  {
    id: 2,
    bgImage: hero2,
    titleLight: 'Woodland',
    titleBold: 'modern'
  },
];

const Hero = () => {
  return (
    <Swiper navigation={true} pagination={{dynamicBullets: true, }} modules={[Navigation, Pagination]} className="mySwiper">
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="hero-slide d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '80vh',
            }}
          >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                    <h1 className="text-white hero-title"><span className='fw-light'>{slide.titleLight}</span><br/>
                    <span className='fw-semibold'>{slide.titleBold}</span></h1>
                    
                    </div>
                </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
