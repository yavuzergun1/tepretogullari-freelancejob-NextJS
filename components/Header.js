import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="header-container w-full h-[150px] border-black-500 border-b-2 flex px-9 py-2">
      <div className="logo-container w-[425px] flex items-center text-[rgb(4,16,68)]">
        <Image alt="logo" src="/images/ana-logo.png" width="150" height="150" />
        <p className="text-[26px] font-[NouvelR] font-extrabold">
          Kemal Tepretoğulları
        </p>
      </div>
    </div>
  );
};

export default Header;
