"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  tags: string;
  imageUrl: string;
};

const WorkCard = (props: Props) => {
  const { title, tags, imageUrl } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="cursor-pointer" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className="relative bg-neutral-900 h-48 rounded-3xl overflow-hidden">
        <Image src={imageUrl} alt="portfolio thumnail" className={`object-cover transition-all ${isHover ? "scale-105 brightness-75" : ""}`} fill />
      </div>
      <div className="mt-3">
        <h4 className={`opacity-90 transition-all ${isHover ? "brightness-75" : ""}`}>{title}</h4>
        <p className="font-bold text-xs opacity-50 mt-0.5">{tags}</p>
      </div>
    </div>
  );
};

export default WorkCard;
