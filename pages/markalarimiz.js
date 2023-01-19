import Image from "next/image";
import React from "react";
import { getLogosData } from "../components/FirebaseUtils";
import { getMarkalarimizData } from "../components/FirebaseUtils";
// import {Link} from "react-scroll";

const Markalarimiz = ({ data, logos }) => {
  console.log(data);
  return (
    <div className="mt-40 font-[NouvelR] text-[rgb(4,16,68)] px-10 text-justify">
      <h1 className="text-center font-bold ">{data.mainTitle} </h1>

      <div className="logos w-[90%] h-[100px] flex items-center justify-between fixed left-20 top-[175px] bg-white">
        <div className="img-container w-[10%] h-32 relative mb-2  ">
          <Image alt="logo" style={{ margin: "auto" }} fill src={logos.dacia} />
        </div>
        <div className="img-container w-[10%] h-24 relative mb-5  ">
          {/* <Link to="kt2" smooth={true}> */}
            <Image alt="logo" fill src={logos.kt2} />
          {/* </Link> */} 
        </div >
        <div className="img-container w-[10%] h-24 relative mb-2 ">
          <Image alt="logo" fill src={logos.renault} />
        </div>
        <div className="img-container w-[10%] h-20 relative ">
          <Image alt="logo" fill src={logos.teprent} />
        </div>
        <div className="img-container w-[10%] h-20 relative mb-2 ">
          <Image alt="logo" fill src={logos.ford} />
        </div>{" "}
        <div className="img-container w-[10%] h-24 relative mb-2 ">
          <Image alt="logo" fill src={logos.nissan} />
        </div>{" "}
        <div className="img-container w-[10%] h-24 relative mb-2 ">
          <Image alt="logo" fill src={logos.sigorta} />
        </div>{" "}
        <div className="img-container w-[10%] h-20 relative mb-2  ">
          <Image alt="logo" fill src={logos.tepretparts} />
        </div>
      </div>
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
        <Image
          className="mb-5 md:mb-0"
          width={"300"}
          height="300"
          src={data.nissanLogo}
        />
        <p>{data.p2} </p>
      </div>

      <div id="kt2" className="flex flex-col  md:flex-row  mb-20 items-center">
        {/* <h2>{data.title3} </h2> */}
        <Image
          className="md:pr-10 mb-5 md:mb-0"
          width={"300"}
          height="300"
          src={data.fordLogo}
        />
        <p>{data.p3} </p>
      </div>

      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {/* <h2>{data.title4} </h2> */}
        <Image
          className="md:pr-10"
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
          className="md:pr-10 mb-5 md:mb-0"
          width={"300"}
          height="300"
          src={data.kt2Logo}
        />
        <div>
          <p>{data.p5} </p>
          <br />
          <p className="underline leading-7">
            KT2 ‘den araç alırken içiniz rahat çünkü;
          </p>
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
          className="md:pr-10 mb-5 md:mb-0"
          width={"300"}
          height="300"
          src={data.sigortaLogo}
        />
        <p>{data.p6} </p>
      </div>
      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {" "}
        <Image
          className="md:pr-10"
          width={"300"}
          height="300"
          src={data.tepretPartsLogo}
        />
        <p>{data.p7} </p>
      </div>
      <div className="flex flex-col  md:flex-row  mb-20 items-center">
        {" "}
        <Image
          className="md:pr-10"
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
  const logos = await getLogosData();

  return {
    props: {
      data,
      logos,
    },
  };
};
