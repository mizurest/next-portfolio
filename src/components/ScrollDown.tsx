"use client";

import Lottie from "react-lottie";
import scrollAnimation from "./../../public/scroll-animation.json";

const ScrollDown = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="absolute z-10 bottom-10 lg:bottom-6 inset-x-0 flex flex-col gap-2.5 items-center opacity-30">
      <Lottie options={defaultOptions} height={64} width={64} />
      <span className="font-thin text-sm">Scroll down</span>
    </div>
  );
};

export default ScrollDown;
