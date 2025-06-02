"use client"

import { Berkshire_Swash } from 'next/font/google'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });  

  return (
    <div className={`h-[calc(100vh-74px)] overflow-y-scroll relative snap-start flex flex-col justify-center items-center min-w-screen -scroll-mb-20 bg-cover bg-center bg-no-repeat snap-y snap-mandatory bg-gradient-to-r from-white to-[#b5c9e5]`}>
      <div className='flex flex-col justify-center min-h-screen items-center snap-end mt-[100vh] mb-10'>
        <div className="flex justify-center text-8xl text-center">Agape Brethren Assembly</div>
        <div className="flex justify-center text-5xl text-center">Unconditional Love</div>
      </div>
      <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="flex flex-col justify-center min-h-screen items-center snap-start bg-center bg-cover bg-no-repeat px-4 text-white"
      style={{ backgroundImage: "url('/church.png')" }}
      >
      <div className='flex flex-col justify-center min-h-screen items-center snap-start bg-center bg-cover bg-no-repeat' style={{backgroundImage: "url('/church.png')"}}>
        <div className="flex justify-center text-2xl text-center">Welcome!</div>
        <div className="flex justify-center items-start">We are a group of believers who gather in the name of Jesus Christ according to the New Testament principles. Please view the other pages if you want to know more about our assembly, and God bless you.</div>
      </div>
      </motion.div>
    </div>
  );
}
