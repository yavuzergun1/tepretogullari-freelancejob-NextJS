import React from "react";
import { getAboutData, getPhotosData } from "../components/FirebaseUtils";
import SwiperAbout from "../components/swiperAbout";

const Hakkimizda = ({ data, photos }) => {
  const photosData = Object.values(photos.slidephotos);
  return (
    <div className="hakkimizda-container flex flex-col items-center my-24 font-[NouvelR]">
      <SwiperAbout photos={photosData} />
      <div className="w-10/12">
        <h1 className="text-center mb-14">{data.title} </h1>
        <p className="text-justify">{data.p1} </p>
        <p className="text-justify">{data.p2} </p>
        <h2 className="text-center mt-5">{data.title2} </h2>
        <p className="text-center">{data.p3} </p>
        <h2 className="text-center mt-5">{data.title3} </h2>
        <p className="text-center">{data.p4} </p>
      </div>
    </div>
  );
};

export default Hakkimizda;

export const getStaticProps = async () => {
  const data = await getAboutData();
  const photos = await getPhotosData();
  return {
    props: {
      data,
      photos,
    },
  };
};
