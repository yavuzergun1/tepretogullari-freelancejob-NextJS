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
        <link rel="icon" href="/images/Ana Logo.png" />
      </Head>
      <main>
        <Swiper photos={photos} />
      </main>
      <p className="text-[56px] font-[oswald] ">
        Kemal Tepretoğulları
      </p>
      <p className="text-[56px] font-extrabold font-[Lobster]">
        Kemal Tepretoğulları
      </p>
      <p className="text-[56px] font-extrabold font-[Anton]">
        Kemal Tepretoğulları
      </p>
 
      <p className="text-[56px] font-extrabold ">Kemal Tepretoğulları</p>
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
