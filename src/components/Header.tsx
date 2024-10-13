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
      <Link href="/" className="flex items-center gap-2.5 cursor-pointer opacity-90 duration-150">
        <CircleAvatar width={28} height={28} />
        <span className="text-sm hover:font-black">Kosuke Koizumi</span>
      </Link>

      <div className="text-sm hidden lg:flex">
        <Link href="/" className="px-4 h-fit hover:opacity-90 opacity-75 duration-150 font-black">
          Home
        </Link>
        <Link href="/portfolio" className="px-4 h-fit hover:opacity-90 opacity-75 duration-150 font-black">
          Portfolio
        </Link>
      </div>
    </header>
  );
};

export default Header;
