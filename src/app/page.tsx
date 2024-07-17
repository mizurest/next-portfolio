"use client";

import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircleAvatar from "@/components/CircleAvatar";
import Lottie from "react-lottie";
import scrollAnimation from "./../../public/scroll-animation.json";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
        <div className="absolute z-10 bottom-10 lg:bottom-6 inset-x-0 flex flex-col gap-2.5 items-center opacity-60">
          <Lottie options={defaultOptions} height={64} width={64} />
          <span className="font-thin text-sm">Scroll down</span>
          
        </div>

        <Image src="/intro.png" fill alt="東京湾の写真" className="object-cover" />
      </section>

      <section className="">
        <div className="max-w-5xl flex justify-between items-baseline py-32 mx-6 lg:mx-auto">
          <h3 className="opacity-90">Recent Works</h3>
          <button className="text-sm font-bold text-sky-900">View All</button>
        </div>
        <div className="py-32 max-w-3xl mx-auto">
          <div className="flex flex-col gap-5 items-center bg-white/[.05] p-9 lg:p-16 rounded-3xl lg:flex-row m-6 lg:m-0">
            <CircleAvatar width={80} height={80} />
            <div className="flex flex-col gap-2">
              <div className="text-center opacity-90 lg:text-start">Kosuke Koizumi</div>
              <p className="text-xs lg:text-sm opacity-65 font-bold">
                FigmaとReactが好きな大学生（休学中）。乗換案内のジョルダン株式会社でUIデザイナー兼コーダーとしてインターン中。主に乗換案内ではなく、鉄道会社や自治体関連の案件に関わることが多い。傍らクラウドワークにも挑戦中。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
