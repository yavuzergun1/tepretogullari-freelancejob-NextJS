import React from "react";
import { getAboutData } from "../components/FirebaseUtils";

const Hakkimizda = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-24 h-[100vh] font-[NouvelR]">
      <h1 className="text-center mb-14">{data.title} </h1>
      <p>{data.p1} </p>
      <p>{data.p2} </p>
      <p>{data.p3} </p>
      <p>{data.p4} </p>
    </div>
  );
};

export default Hakkimizda;

export const getStaticProps = async () => {
  const data = await getAboutData();
  return {
    props: {
      data,
    },
  };
};
