import CircleAvatar from "./CircleAvatar";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 lg:px-14 fixed z-20 w-screen h-24 ">
      <div className="flex items-center gap-2.5">
        <CircleAvatar />
        <span>Kosuke Koizumi</span>
      </div>

      <div className="gap-8 hidden lg:flex">
        <span>Home</span>
        <span>Portfolio</span>
      </div>
    </header>
  );
};

export default Header;
