import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ClientSlider() {
  const clientLogos = ['/hero_fincorp logo.png', '/mobikwik logo.png', '/sbi logo.png', '/vi logo.png'];  // Replace with actual paths

  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      {clientLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt={`Client ${index + 1}`} style={{ width: '100%' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ClientSlider;
