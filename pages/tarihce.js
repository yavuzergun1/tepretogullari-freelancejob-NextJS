import React from "react";
import { getTarihceData } from "../components/FirebaseUtils";

const Tarihce = ({ data }) => {
  return (
    <div className="mt-24 h-[100vh] font-[NouvelR]">
      <h1 className="text-center mb-14">{data.title} </h1>
      <p>{data.p1} </p>
      <p>{data.p2} </p>
      <p>{data.p3} </p>
      <p>{data.p4} </p>
      <p>{data.p5} </p>
      <p>{data.p6} </p>
      <p>{data.p7} </p>
      <p>{data.p8} </p>
      <p>{data.p9} </p>
      <p>{data.p10} </p>
      <p>{data.p11} </p>
      <p>{data.p12}</p>
      <p>{data.p13} </p>

      <p>{data.p14} </p>
      <p>{data.p15} </p>
      <p>{data.p16} </p>
  
    </div>
  );
};

export default Tarihce;

export const getStaticProps = async () => {
  const data = await getTarihceData();
  return {
    props: {
      data,
    },
  };
};
