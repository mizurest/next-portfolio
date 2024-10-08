'use client'

import Link from "next/link";
import CircleAvatar from "./CircleAvatar";
import { hexToRgb } from "@/libs/color";
import { useEffect, useState } from "react";

type Props = {
  themeColor: string;
};

const Header = (props: Props) => {
  const { themeColor } = props;
  const [heroHeader, setHeroHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 90) {
        setHeroHeader(false);
      } else {
        setHeroHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let rgb = hexToRgb(themeColor);

  return (
    <header
      className="flex items-center justify-between px-6 lg:px-14 fixed z-20 w-screen h-24"
      style={{
        background: heroHeader
        ? `linear-gradient(180deg, rgba(${rgb}, 1) 0%, rgba(${rgb}, 0) 100%)`
        : `linear-gradient(180deg, rgba(32,32,32, 1) 0%, rgba(32,32,32, 0) 100%)`,
      }}
    >
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer hover:opacity-75 duration-150">
        <CircleAvatar width={28} height={28} />
        <span className="opacity-90 text-sm">Kosuke Koizumi</span>
        {/* <Image src="/logo.svg" alt="logo" width={75} height={50} className="hover:opacity-75"/> */}
      
      </Link>

      <div className="font-bold text-sm hidden lg:flex">
        <Link href="/" className="px-4 h-fit opacity-90 hover:opacity-75 duration-150">
          Home
        </Link>
        <Link href="/portfolio" className="px-4 h-fit opacity-90 hover:opacity-75 duration-150">
          Portfolio
        </Link>
      </div>
    </header>
  );
};

export default Header;
