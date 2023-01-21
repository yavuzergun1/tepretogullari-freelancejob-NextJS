import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import {  Autoplay, A11y, Pagination, EffectFade } from "swiper";
import Image from "next/image";

export default function App({ photos }) {
  // console.log(photos);
  return (
    <>
      <Swiper
        // grabCursor={true}
        effect={"fade"}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper w-[90%] max-w-5xl h-[220px] sm:h-[300px] md:h-[400px] lg:h-[610px] "
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        speed={3000}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
      >
        {photos.map((photo, i) => {
          return (
            <SwiperSlide className="w-[100%]" key={i}>
              <Image
                priority
                className="w-[100%] h-[580px] mt-6"
                alt="car"
                width="500"
                height="90"
                src={photo}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
