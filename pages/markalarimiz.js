import Image from "next/image";
import React from "react";
import { getMarkalarimizData } from "../components/FirebaseUtils";

const Markalarimiz = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-24 font-[NouvelR]">
      <h1>{data.mainTitle} </h1>
      <h2>{data.title1} </h2>
      <Image width={"300"} height="300" src={data.renaultLogo} />
      <p>{data.p1} </p>

      <h2>{data.title2} </h2>
      <Image width={"300"} height="300" src={data.nissanLogo} />
      <p>{data.p2}</p>

      <h2>{data.title3} </h2>
      <Image width={"300"} height="300" src={data.fordLogo} />
      <p>{data.p3} </p>

      <h2>{data.title4} </h2>
      <Image width={"300"} height="300" src={data.teprentLogo} />
      <p>{data.p4} </p>

      <h2>{data.title5} </h2>
      <Image width={"300"} height="300" src={data.kt2Logo} />
      <p>{data.p5} </p>

      <p>KT2 ‘den araç alırken içiniz rahat çünkü;</p>
      <ul>
        <li>• 96 nokta kontrolü var. </li>
        <li>• Deneme sürüş imkânı var.</li>
        <li>• Ücretsiz kontrol var.</li>
        <li>• 6 ay ücretsiz garanti var.</li>
        <li>• Yol yardım hizmeti var.</li>
        <li>• Bürokrasiye yer yok.</li>
      </ul>
    </div>
  );
};

export default Markalarimiz;

export const getStaticProps = async () => {
  const data = await getMarkalarimizData();
  return {
    props: {
      data,
    },
  };
};
