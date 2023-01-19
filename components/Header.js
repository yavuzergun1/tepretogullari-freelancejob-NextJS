import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SVG } from "react-inlinesvg";

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="header-container w-full h-[150px] border-black-500 border-b-2 flex justify-center px-4 lg:px-9 py-2 ">
      <button
        onClick={handleClick}
        className="absolute left-10 top-10 group z-20"
      >
        <div className="button-container relative flex overflow-hidden items-center justify-center rounded-full w-[53px] h-[53px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[18px] transform transition-all duration-500 origin-center overflow-hidden">
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 ${
                !open ? " -rotate-[39deg]" : " "
              }  -translate-x-1`}
            ></div>
            <div className="bg-white h-[2px] w-5 rounded transform transition-all duration-500 "></div>
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 ${
                !open ? " rotate-[39deg]" : " "
              }  -translate-x-1`}
            ></div>
          </div>
        </div>
      </button>

      <div
        className={`side-menu-container -left-0 top-0 h-[950px] w-[350px] bg-[rgb(8,18,60)] absolute z-10 ${
          open
            ? "-translate-x-full transition-all duration-500"
            : "translate-x-0 transition-all duration-500"
        } `}
      >
        <div className="side-links-container w-[320px] h-[550px] mt-32 pl-5 flex flex-col justify-evenly font-[nouvelR] text-lg text-white">
          <Link
            className="hover:text-[rgb(71,101,236)] flex justify-between"
            href={"/hakkimizda"}
          >
            Hakkımızda
            <img
              className="w-7"
              src="/images/icons8-chevron-right-100.png"
              alt=""
            />
          </Link>

          <Link
            className="hover:text-[rgb(71,101,236)] flex justify-between"
            href={"/tarihce"}
          >
            Hikayemiz
            <img
              className="w-7"
              src="/images/icons8-chevron-right-100.png"
              alt=""
            />
          </Link>

          <Link
            className="hover:text-[rgb(71,101,236)] flex justify-between"
            href={"/markalarimiz"}
          >
            Markalarımız
            <img
              className="w-7"
              src="/images/icons8-chevron-right-100.png"
              alt=""
            />
          </Link>

          <Link
            className="hover:text-[rgb(71,101,236)] flex justify-between"
            href={"/markalarimiz"}
          >
            İnsan Kaynakları
            <img
              className="w-7"
              src="/images/icons8-chevron-right-100.png"
              alt=""
            />
          </Link>

          <Link
            className="hover:text-[rgb(71,101,236)] flex justify-between"
            href={"/markalarimiz"}
          >
            İletişim
            <img
              className="w-7"
              src="/images/icons8-chevron-right-100.png"
              alt=""
            />
          </Link>

          <Link
            className="hover:text-[rgb(71,101,236)] flex justify-between"
            href={"/markalarimiz"}
          >
            KVKK
            <img
              className="w-7"
              src="/images/icons8-chevron-right-100.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div
        className="logo-container cursor-pointer w-[425px] flex flex-col items-center text-[rgb(4,16,68)]"
        onClick={() => router.push("/")}
      >
        <Image
          className="w-24"
          priority
          alt="logo"
          src="/images/ana-logo.png"
          width="100"
          height="100"
        />
        <p className="text-[1.2rem] md:text-[1.6rem] font-[nouvelR] font-extrabold">
          Kemal Tepretoğulları
        </p>
      </div>
    </div>
  );
};

export default Header;
