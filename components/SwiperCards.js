import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { EffectCards, Autoplay, A11y, Pagination } from "swiper";
import Image from "next/image";

export default function App({ photos }) {
  console.log(photos);
  return (
    <>
      <Swiper
        effect={"cards"}
        // grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination]}
        className="mySwiper"
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
        {
          photos.map((photo,i) => {
            return (
              <SwiperSlide key={i}>
                <Image priority alt="car" width={800} height={500} src={photo} />
              </SwiperSlide>
            );
          })
        }
      
  
      </Swiper>
    </>
  );
}
