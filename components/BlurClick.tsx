import { Berkshire_Swash } from 'next/font/google';
import React, { useState } from 'react'

interface BlurBox {
    img: string;
    txt: string;
}

const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

function BlurClick({img, txt}: BlurBox) {
  const [doBlur, setDoBlur] = useState(true);
   
  const handleClick = () => {
    setDoBlur(!doBlur);
  }

  return (
    <div className='relative snap-start flex flex-row justify-center items-center min-h-screen min-w-screen -scroll-mb-20 bg-cover bg-center bg-no-repeat' style={{backgroundImage: img}}>
        <div className={`px-10 w-full h-full flex items-center text-center text-white font-bold text-3xl rounded-lg transition duration-150 will-change-contents ${doBlur ? 'blur-none backdrop-blur-md' : 'backdrop-blur-none blur-sm'} ${bs.className}`} onClick={handleClick}>{txt}</div>
    </div>
  )
}

export default BlurClick