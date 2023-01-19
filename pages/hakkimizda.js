import React from "react";
import { getAboutData, getPhotosData } from "../components/FirebaseUtils";
import SwiperAbout from "../components/swiperAbout";

const Hakkimizda = ({ data, photos }) => {
  const photosData = Object.values(photos.slidephotos);
  const aboutItems = data.content.hakkimizda;
  const vizyonItems = data.content.vizyon;
  const misyonItems = data.content.misyon;
  const aboutKeys = Object.keys(data.content.hakkimizda).sort();
  const vizyonKeys = Object.keys(data.content.vizyon).sort();
  const misyonKeys = Object.keys(data.content.misyon).sort();
  return (
    <div className="hakkimizda-container flex flex-col items-center my-14 font-[Nouvel+R] px-10">
      {aboutKeys.map((key, index) => {
        return index < 1 ? (
          <h1 key={index} className="mb-10">
            {aboutItems[key]}
          </h1>
        ) : (
          <p className="my-3" key={index}>
            {aboutItems[key]}{" "}
          </p>
        );
      })}

      <SwiperAbout photos={photosData} />

      <h2 className="my-10">Vizyon ve Misyonumuz</h2>
      {vizyonKeys.map((key, index) => {
        return index < 1 ? (
          <h3 key={index} className="my-5">
            {vizyonItems[key]}
          </h3>
        ) : (
          <p key={index}>{vizyonItems[key]} </p>
        );
      })}

      {misyonKeys.map((key, index) => {
        return index < 1 ? (
          <h3 key={index} className="my-5">
            {misyonItems[key]}
          </h3>
        ) : (
          <p key={index}>{misyonItems[key]} </p>
        );
      })}
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
