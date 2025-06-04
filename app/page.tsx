"use client"

import { Berkshire_Swash } from 'next/font/google'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });  

  return (
    <div className={`h-[calc(100vh-74px)] overflow-y-scroll relative snap-start flex flex-col justify-center items-center min-w-screen -scroll-mb-20 bg-cover bg-center bg-no-repeat snap-y snap-mandatory bg-gradient-to-r from-white to-[#b5c9e5]`}>
      <div className='flex flex-col justify-center min-h-screen items-center snap-end mt-[200vh] mb-[100vh] -scroll-mt-52'>
        <div className="flex justify-center text-8xl text-center">Agape Brethren Assembly</div>
        <div className="flex justify-center text-5xl text-center">Unconditional Love</div>
      </div>
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }} // start 40px lower
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} // move up and fade in
      transition={{ duration: isInView ? 2 : 0, ease: 'easeOut'}}
      className="flex flex-col justify-center min-h-screen items-center snap-start bg-center bg-cover bg-no-repeat px-4 text-white will-change-contents"
      style={{ backgroundImage: "url('/church.png')" }}
      >
      <div className='flex flex-col justify-center min-h-screen min-w-screen items-center snap-start'>
        <div className="flex justify-end items-center overflow-x-hidden w-screen md:w-[83vw]">
          <Card className='w-80 mx-10 text-center bg-orange-200 dark:bg-cyan-950'>
            <CardHeader>
              <CardTitle className={bs.className}>Welcome!</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We are a group of believers who gather in the name of Jesus Christ according to the New Testament principles. Please view the other pages if you want to know more about our assembly, and God bless you.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
