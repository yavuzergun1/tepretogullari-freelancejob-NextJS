import Image from "next/image";
import React from "react";
import { getMarkalarimizData } from "../components/FirebaseUtils";

const Markalarimiz = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-24 font-[NouvelR] text-[rgb(4,16,68)] px-10 text-justify">
      <h1 className="text-center font-bold mb-16">{data.mainTitle} </h1>

      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {/* <h2>{data.title1} </h2> */}
        <Image
          className="lg:h-[190px] lg:w-[300px] mb-5 md:mb-0"
          width="300"
          height="300"
          src={data.renaultLogo}
        />
        <p>{data.p1} </p>
      </div>

      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {/* <h2>{data.title2} </h2> */}
        <Image width={"300"} height="300" src={data.nissanLogo} />
        <p>{data.p2} </p>
      </div>

      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {/* <h2>{data.title3} </h2> */}
        <Image
          className="pr-10"
          width={"300"}
          height="300"
          src={data.fordLogo}
        />
        <p>{data.p3} </p>
      </div>

      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {/* <h2>{data.title4} </h2> */}
        <Image
          className="pr-10"
          width={"300"}
          height="300"
          src={data.teprentLogo}
        />
        <p>{data.p4} </p>
      </div>

      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {" "}
        {/* <h2>{data.title5} </h2> */}
        <Image
          className="pr-10"
          width={"300"}
          height="300"
          src={data.kt2Logo}
        />
        <div>
          <p>{data.p5} </p>
          <br />
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
      </div>

      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {" "}
        <Image
          className="pr-10"
          width={"300"}
          height="300"
          src={data.sigortaLogo}
        />
        <p>{data.p6} </p>
      </div>
      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {" "}
        <Image
          className="pr-10"
          width={"300"}
          height="300"
          src={data.tepretPartsLogo}
        />
        <p>{data.p7} </p>
      </div>
      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {" "}
        <Image
          className="pr-10"
          width={"300"}
          height="300"
          src={data.totalLogo}
        />
        <p>{data.p8} </p>
      </div>
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
