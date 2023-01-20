import Head from "next/head";
import Image from "next/image";
import Swiper from "../components/SwiperCards";
import styles from "../styles/Home.module.css";
import { getPhotosData } from "../components/FirebaseUtils";

export default function Home({ data }) {
  console.log(data);
  const photos = Object.values(data.slidephotos);
  console.log(photos);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/ana-logo.png" />
          <link href="https://fonts.googleapis.com/css2?family=Nouvel+R&display=swap" rel="stylesheet"></link>
      </Head>
      <main className="w-[100%]"> 
        <div className="home-container w-[100%] flex flex-col items-center justify-center">
        
          <div className="w-[61%] mt-20 flex justify-between">
            
        <div className="w-[45%] h-32 bg-black"></div>
        <div className="w-[45%] bg-orange-600"></div>
        </div>
          <Swiper photos={photos} />
        
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getPhotosData();
  return {
    props: {
      data,
    },
  };
};
