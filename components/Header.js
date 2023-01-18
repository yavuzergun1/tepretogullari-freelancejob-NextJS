import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="header-container w-full h-[150px] border-black-500 border-b-2 flex justify-between px-4 lg:px-9 py-2 ">
      <button onClick={handleClick} class="relative group z-20">
        <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-500 origin-center overflow-hidden">
            <div
              class={`bg-white h-[2px] w-7 transform transition-all duration-300 ${
                !open ? " -rotate-45" : " "
              }  -translate-x-1`}
            ></div>
            <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-500 "></div>
            <div
              class={`bg-white h-[2px] w-7 transform transition-all duration-300 ${
                !open ? " rotate-45" : " "
              }  -translate-x-1`}
            ></div>
          </div>
        </div>
      </button>

      <div
        className={`-left-0 top-0 h-[950px] w-[350px] bg-[rgb(8,18,60)] absolute z-10 ${
          open
            ? "-translate-x-full transition-all duration-500"
            : "translate-x-0 transition-all duration-500"
        } `}
      >
        <div className=" w-[320px] h-[750px] pl-5 hidden md:flex flex-col justify-evenly font-[nouvelR] text-lg text-white">
          <Link className="hover:text-[rgb(71,101,236)]" href={"/hakkimizda"}>
            Hakkımızda{" "} 
            <Image className="fill-white" width={20} height={20} src="/images/chevron-right.svg" />
          </Link>
          <Link className="hover:text-[rgb(71,101,236)]" href={"/tarihce"}>
            {" "}
            Tarihçemiz
          </Link>

          <Link className="hover:text-[rgb(71,101,236)]" href={"/markalarimiz"}>
            {" "}
            Markalarımız
          </Link>
        </div>
      </div>
      <div
        className="logo-container cursor-pointer w-[425px] flex items-center text-[rgb(4,16,68)]"
        onClick={() => router.push("/")}
      >
        <Image
          className="w-24 md:w-36"
          priority
          alt="logo"
          src="/images/ana-logo.png"
          width="150"
          height="150"
        />
        <p className="text-[1.2rem] md:text-[1.6rem] font-[nouvelR] font-extrabold">
          Kemal Tepretoğulları
        </p>
      </div>

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Header;
