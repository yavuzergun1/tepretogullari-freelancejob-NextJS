import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import {  Autoplay, A11y, Pagination } from "swiper";
import Image from "next/image";

export default function App({ photos }) {
  // console.log(photos);
  return (
    <>
      <Swiper
        effect={"cards"}
        // grabCursor={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper mb-20 w-[70%] max-w-5xl h-[220px] mt-16 sm:h-[300px] md:h-[400px] lg:h-[610px] "
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {photos.map((photo, i) => {
          return (
            <SwiperSlide className="w-[80%]" key={i} >
              <Image priority className="w-[90%] h-[550px]" alt="car" width="500" height="90" src={photo} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
