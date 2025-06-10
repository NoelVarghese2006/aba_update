"use client";

import { useState } from "react";
import Image from "next/image";
import { Berkshire_Swash } from "next/font/google";

const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] });

type BlurBox = {
  img: string;  // e.g. "/table-fs8.png"
  txt: string;
};

function BlurClick({ img, txt }: BlurBox) {
  const [doBlur, setDoBlur] = useState(true);

  const handleClick = () => {
    setDoBlur(!doBlur);
  };

  return (
    <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen -scroll-mb-20">
      <Image
        src={img} // Default image, can be replaced with img prop
        alt="background"
        fill
        priority={false}
        className="object-cover"
      />

      <div
        onClick={handleClick}
        className={`z-10 px-10 w-full h-full flex items-center text-center text-white font-bold text-3xl rounded-lg transition duration-150 ${doBlur ? 'backdrop-blur-md' : 'backdrop-blur-none blur-sm'} ${bs.className}`}
      >
        {txt}
      </div>
    </div>
  );
}

export default BlurClick;
