
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay, A11y, Pagination } from "swiper";
import Image from "next/image";

export default function SwiperAbout({ photos }) {
  console.log(photos);
  return (
    <>
      <Swiper
        effect={"fade"}
        // grabCursor={true}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper mb-20 w-[100%] max-w-5xl h-[220px] sm:h-[300px] md:h-[400px] lg:h-[550px] "
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
            disableOnInteraction: false,
            
        }}
        speed={3000}
      >
        {photos.map((photo, i) => {
          return (
            <SwiperSlide key={i}>
              <Image priority alt="car" fill={true} src={photo} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
