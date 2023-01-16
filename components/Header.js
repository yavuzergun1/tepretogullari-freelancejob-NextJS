import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="header-container w-full h-[150px] border-black-500 border-b-2 flex justify-between px-9 py-2 cursor-pointer">
      <div
        className="logo-container w-[425px] flex items-center text-[rgb(4,16,68)]"
        onClick={() => router.push("/")}
      >
        <Image alt="logo" src="/images/ana-logo.png" width="150" height="150" />
        <p className="text-[26px] font-[NouvelR] font-extrabold">
          Kemal Tepretoğulları
        </p>
      </div>
      <div className="w-[550px] flex justify-between items-center font-[NouvelR]">
        <Link href={"/hakkimizda"}>Hakkımızda </Link>
        <Link href={"/tarihce"}> Tarihçemiz</Link>
        <Link href={"/vizyon"}>Vizyon ve Misyon </Link>
        <Link href={"/markalarimiz"}> Markalarımız</Link>
      </div>
    </div>
  );
};

export default Header;
