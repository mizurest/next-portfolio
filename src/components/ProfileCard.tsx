import GithubIcon from "../../public/icon/github.svg";
import ZennIcon from "../../public/icon/zenn.svg";
import BirthdayIcon from "../../public/icon/birthday.svg";
import PinIcon from "../../public/icon/pin.svg";
import CircleAvatar from "@/components/CircleAvatar";

const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-5 items-center border border-white/[.08] p-9 rounded-2xl md:flex-row m-6 md:m-0 ">
      <CircleAvatar width={80} height={80} />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-center opacity-90 md:text-start text-base">Kosuke Koizumi</p>
          <div className="flex gap-4 font-bold">
            <div className="flex items-center gap-1.5 text-xs lg:text-sm">
              <BirthdayIcon />
              <span className="opacity-70">2001/06/08</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs lg:text-sm">
              <PinIcon />
              <span className="opacity-70">Chigasaki, Kanagawa</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-2 font-bold">
          <a className="flex items-center px-4 py-1.5 rounded-full bg-white/[.06] gap-1.5 hover:opacity-75" href="https://github.com/mizurest" target="_blank">
            <GithubIcon />
            <span className="text-xs">Github</span>
          </a>
          <a className="flex items-center px-4 py-1.5 rounded-full bg-white/[.06] gap-1.5 hover:opacity-75" href="https://zenn.dev/y2htxr" target="_blank">
            <ZennIcon />
            <span className="text-xs">Zenn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
