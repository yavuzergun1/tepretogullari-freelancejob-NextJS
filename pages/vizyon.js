import React from "react";
import { getVizyonData } from "../components/FirebaseUtils";

const Vizyon = ({ data }) => {
  return (
    <div className="mt-24 h-[100vh] font-[NouvelR] px-16">
      <h1 className="text-center mb-24">{data.mainTitle} </h1>
      <h2 className="mb-7">{data.title} </h2>
      <p className="mb-20">{data.p1} </p>
      <h2 className="mb-7">{data.title2} </h2>
      <p>{data.p2} </p>
    </div>
  );
};

export default Vizyon;

export const getStaticProps = async () => {
  const data = await getVizyonData();
  return {
    props: {
      data,
    },
  };
};
