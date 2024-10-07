"use client";

import Image from "next/image";
import ScrollDown from "@/components/ScrollDown";
import { useEffect, useRef } from "react";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const words = textRef.current.querySelectorAll(".word");
      words.forEach((word: Element, wordIndex: number) => {
        if (word instanceof HTMLElement) {
          const letters = word.querySelectorAll("span");
          letters.forEach((letter: HTMLElement, letterIndex: number) => {
            letter.style.animationDelay = `${wordIndex * 0.1 + letterIndex * 0.03 + 0.5}s`;
          });
        }
      });
    }
  }, []);

  const text = "Hello!\nI'm a UI designer in Tokyo.";

  return (
    <section className="relative flex items-center h-screen">
      <Image src="/intro.png" fill alt="Tokyo Bay" className="object-cover opacity-20 animate-appearBg" />
      <h1 ref={textRef} className="text-animation mx-8 text-5xl z-10 lg:mx-48 lg:text-6xl">
        {text.split("\n").map((line, lineIndex) => (
          <div key={lineIndex} className="line">
            {line.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="word inline-block mr-4">
                {word.split("").map((char, letterIndex) => {
                  if (char === "👋") {
                    return (
                      <span key={letterIndex} className="emoji opacity-0">
                        {char}
                      </span>
                    );
                  } else {
                    return (
                      <span key={letterIndex} className="inline-block">
                        {char}
                      </span>
                    );
                  }
                })}
              </span>
            ))}
            <br />
          </div>
        ))}
      </h1>

      {/* <ScrollDown /> */}
    </section>
  );
};

export default Hero;
