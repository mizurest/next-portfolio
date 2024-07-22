"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  title: string;
  tags: string;
  imageUrl: string;
  contentId: string;
};

const WorkCard = (props: Props) => {
  const { title, tags, imageUrl, contentId } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <Link href={`/portfolio/${contentId}`} className="cursor-pointer" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className="relative bg-neutral-900 h-48 rounded-3xl overflow-hidden">
        <Image src={imageUrl} alt="portfolio thumnail" fill className={`object-cover transition-all ${isHover ? "scale-105 brightness-75" : ""}`} />
      </div>
      <div className="mt-3">
        <h4 className={`opacity-90 transition-all ${isHover ? "brightness-75" : ""}`}>{title}</h4>
        <p className="font-bold text-xs opacity-50 mt-0.5">{tags}</p>
      </div>
    </Link>
  );
};

export default WorkCard;
