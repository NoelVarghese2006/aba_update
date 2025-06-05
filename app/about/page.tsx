"use client"

import { Berkshire_Swash } from 'next/font/google'
import BlurClick from '@/components/BlurClick'
  
const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

function About() {
  

  return (
    <div className="top-4 overflow-x-hidden snap-y snap-mandatory max-h-[calc(100vh-74px)] flex flex-col items-center text-left overflow-y-scroll h-[calc(100vh-74px)]">
        <div className={bs.className}><div className="snap-start flex justify-center items-center text-4xl h-[calc(100vh-74px)]">About Us</div></div>
        <BlurClick img="url('/table.png')" txt="Agape Brethren Assembly was formed in the year 2011 by the Lord, through a few like-minded brethren, to worship and serve Him in the North Dallas region." />
        <BlurClick img="url('/testify.png')" txt="As an assembly, our focus is on becoming more and more Christ-like in our conduct, reaching the unreached with His glorious Gospel, and abounding in Faith, Hope, and Love." />
        <BlurClick img="url('/romans.png')" txt="In all our gatherings, we follow the apostolic simplicity as outlined in His Word and strive to exalt Christ in whatever we do." />
        <div className='snap-start min-h-screen min-w-screen -scroll-mb-20 flex flex-col justify-start items-center px-10 xs:text-xl text-2xl'>
          <div className={`text-4xl p-10 ${bs.className}`}>What&apos;s Agape?</div>
          <div className='p-4 bg-orange-200 dark:bg-cyan-700 rounded-lg'>
            <div>&quot;AGAPE&quot; is Greek for unconditional love, the greatest form of love seen in the Bible. God manifested this love towards mankind by sending His only begotten Son Jesus Christ to die for man&apos;s sins on the cross of calvary, so that &quot;...whosoever believes in Him will not perish but have everlasting life&quot;. (John 3:16)</div>
            <div className="my-4">Are you burdened with sins and wondering who can save you? Christ alone! &quot;Nor is there salvation in any other, for there&apos;s no other name under heaven given among men by which we must be saved&quot;. (Acts 4:12)</div>
            <div className="mb-4 snap-start">If you confess your sins, believe in Jesus Christ, and accept Him as the Lord of your life, you will be saved. To such that are saved, &quot;he gave the right to be called the children of God&quot;. (John 1:12)</div>
            <div>If you have any questions, please feel free to contact us using any of the means provided on the contact page.</div>
          </div>
        </div>
    </div>
  )
}

export default About