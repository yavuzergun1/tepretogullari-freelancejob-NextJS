import Image from "next/image";
import React from "react";
import { getMarkalarimizData } from "../components/FirebaseUtils";

const Markalarimiz = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-24 h-[100vh] font-[NouvelR]">
      <h1>{data.mainTitle} </h1>
      <Image width={"300"} height="300" src={data.renaultLogo} />
      <h2>{data.title1} </h2>
      <p>{data.p1} </p>
      <h2>{data.title2} </h2>
      <Image width={"300"} height="300" src={data.nissanLogo} />

      <p>{data.p2}</p>
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
