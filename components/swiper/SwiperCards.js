import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <Image width={800} height={500} src="/images/slider 1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={800} height={500} src="/images/slider 2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={800} height={500} src="/images/slider 3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={800} height={500} src="/images/slider-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
