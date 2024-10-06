import Image from "next/image";
import ScrollDown from "@/components/ScrollDown";

const Hero = () => {
  return (
    <section className="relative flex items-center h-screen">
      <Image src="/intro.png" fill alt="Tokyo Bay" className="object-cover opacity-20" />
      <h1 className="mx-8 text-5xl z-10 transition-all opacity-90 lg:mx-48 lg:text-6xl">
        Hi 👋
        <br />
        I&apos;m a UI designer in Tokyo.
      </h1>
      {/* <p className="absolute right-4 bottom-4 font-thin text-xxs lg:text-xs opacity-35">2024.06.08 @Tokyo Bay</p> */}
      {/* <ScrollDown /> */}
      
    </section>
  );
};

export default Hero;
