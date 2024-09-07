import React from 'react';
 import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';

function ImageSlider() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide><img style={{width:"300px"}} src="/hero_fincorp logo.png" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img style={{width:"300px"}} src="/mobikwik logo.png" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img style={{width:"300px"}} src="/sbi logo.png" alt="Slide 3" /></SwiperSlide>
      <SwiperSlide><img style={{width:"250px"}} src="/vi logo.png" alt="Slide 4" /></SwiperSlide>
    </Swiper>
  );
}

export default ImageSlider;

 