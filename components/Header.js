import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="header-container w-full h-[150px] border-black-500 border-b-2 flex justify-between px-4 lg:px-9 py-2 ">
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
        <p className="text-[1.2rem] md:text-[1.6rem] font-[NouvelR] font-extrabold">
          Kemal Tepretoğulları
        </p>
      </div>
      <div className=" w-[330px] lg:w-[380px] hidden md:flex justify-between items-center font-[NouvelR] text-lg">
        <Link className="hover:text-[rgb(71,101,236)]" href={"/hakkimizda"}>
          Hakkımızda{" "}
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
