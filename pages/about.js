import React from "react";
import { getAboutData } from "../components/FirebaseUtils";
const about = ({ data }) => {
      console.log(data.hakkimizda);

    return <div>
        {data.hakkimizda}
  </div>;
};

export default about;

export const getStaticProps = async () => {
  const data = await getAboutData();
  return {
    props: {
      data,
    },
  };
};
