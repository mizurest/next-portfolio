import GithubIcon from "../../public/icon/github.svg";
import CircleAvatar from "@/components/CircleAvatar";

const ProfileCard = () => {
  return (
    <div className="flex flex-col gap-5 items-center bg-white/[.05] p-9 md:p-14 rounded-3xl md:flex-row m-6 md:m-0">
      <CircleAvatar width={80} height={80} />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="text-center opacity-90 md:text-start">Kosuke Koizumi</div>
          <p className="text-xs lg:text-sm opacity-65 font-bold">
            FigmaとReactが好きな大学生（休学中）。乗換案内のジョルダン株式会社でUIデザイナー兼コーダーとしてインターン中。主に乗換案内ではなく、鉄道会社や自治体関連の案件に関わることが多い。傍らクラウドワークにも挑戦中。
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <a className="flex items-center gap-1.5 hover:opacity-75" href="https://github.com/mizurest">
            <GithubIcon />
            <span className="text-xs">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
