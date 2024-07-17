import CircleAvatar from "./CircleAvatar";

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 lg:px-14 fixed z-20 w-screen h-24 ">
      <div className="flex items-center gap-2.5">
        <CircleAvatar width={32} height={32} />
        <span className="opacity-90">Kosuke Koizumi</span>
      </div>

      <div className="hidden lg:flex">
        <Link href="/" className="px-4 h-fit opacity-90 hover:opacity-75 duration-150">Home</Link>
        <Link href="/portfolio" className="px-4 h-fit opacity-90 hover:opacity-75 duration-150">Portfolio</Link>

      </div>
    </header>
  );
};

export default Header;
