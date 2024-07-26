import Link from "next/link";
import CircleAvatar from "./CircleAvatar";

type Props = {
  themeColor?: string;
};

const Header = (props: Props) => {
  const { themeColor } = props;
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  let rgb = "32,32,32";

  if (themeColor) {
    rgb = hexToRgb(themeColor);
  }
  

  return (
    <header
      className="flex items-center justify-between px-6 lg:px-14 fixed z-20 w-screen h-24"
      style={{
        background: `linear-gradient(180deg, rgba(${rgb}, 1) 0%, rgba(${rgb}, 0) 100%)`,
      }}
    >
      <div className="flex items-center gap-2.5">
        <CircleAvatar width={32} height={32} />
        <span className="opacity-90">Kosuke Koizumi</span>
      </div>

      <div className="hidden lg:flex">
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
