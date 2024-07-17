import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircleAvatar from "@/components/CircleAvatar";
import ScrollDown from "@/components/ScrollDown";
import WorkCard from "@/components/WorkCard";
import GithubIcon from "../../public/icon/github.svg"

export default function Home() {
  return (
    <main className="">
      <Header />

      <section className="relative flex items-center h-screen">
        <h1 className="mx-8 text-5xl z-10 transition-all opacity-90 lg:mx-40 lg:text-6xl ">
          Hi 👋
          <br />
          I'm a UI designer in Japan.
        </h1>
        <p className="absolute right-4 bottom-4 font-thin text-xxs lg:text-xs opacity-35">Photo 2024.06.08 @Tokyo Bay</p>
        <ScrollDown />
        <Image src="/intro.png" fill alt="東京湾の写真" className="object-cover" />
      </section>

      <section>
        <div className="max-w-5xl  mx-6 lg:mx-auto py-32">
          <div className=" flex justify-between items-baseline">
            <h3 className="text-lg opacity-90">Recent Works</h3>
            <button className="text-sm font-bold text-sky-900">View All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 transition-all">
            <WorkCard title="らびにん / 雨宮みやびcover 【歌ってみた】" tags="Movie" />
          </div>
        </div>

        <div className="py-32 max-w-3xl mx-auto">
          <div className="flex flex-col gap-5 items-center bg-white/[.05] p-9 md:p-16 rounded-3xl md:flex-row m-6 md:m-0">
            <CircleAvatar width={80} height={80} />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <div className="text-center opacity-90 md:text-start">Kosuke Koizumi</div>
                <p className="text-xs lg:text-sm opacity-65 font-bold">
                  FigmaとReactが好きな大学生（休学中）。乗換案内のジョルダン株式会社でUIデザイナー兼コーダーとしてインターン中。主に乗換案内ではなく、鉄道会社や自治体関連の案件に関わることが多い。傍らクラウドワークにも挑戦中。
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <a className="flex items-center gap-1.5" href="https://github.com/mizurest">
                  <GithubIcon />
                  <span className="text-xs">Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
