import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
function Swipper() {
  return (
    <Swiper
    direction='Vertical'
    slidesPerView={1}
    loop={true}
    speed={1000}
    autoplay={{ delay:4000, disableOnInteraction:false}}
   
  >
    <SwiperSlide><h1 className='text-white'>Slide 1</h1></SwiperSlide>
    <SwiperSlide><h1 className='text-white'>Slide 2</h1></SwiperSlide>
    <SwiperSlide><h1 className='text-white'>Slide 3</h1></SwiperSlide>
    <SwiperSlide><h1 className='text-white'>Slide 4</h1></SwiperSlide>
    ...
  </Swiper>
  )
}

export default Swipper