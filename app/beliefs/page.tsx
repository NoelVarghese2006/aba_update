"use client"

import FadeInSVG from "@/components/FadeInSVG"

import { Berkshire_Swash } from 'next/font/google'
import VerseCard from "@/components/VerseCard"
  
const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

// const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

function Beliefs() {
  return (
    <div className="top-4 flex flex-col overflow-y-auto overflow-x-hidden snap-y snap-mandatory max-h-[calc(100vh-74px)]">
    
    <div className={bs.className}><h1 className="snap-start flex justify-center items-center text-4xl h-[calc(100vh-74px)]">We Believe: </h1></div>
    <div className="mt-20 p-[10vw] text-3xl">
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen md:-scroll-mb-20">
        <div className="realtive z-10">That the Bible is the inspired Word of God and is the final authority for all matters of faith, life, and conduct.  
          <VerseCard reference="&nbsp;(2 Timothy 3:16-17," verse="&apos;All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work.&apos; (NKJV)" />
          <VerseCard reference="&nbsp;2 Peter 1:21," verse="&apos;for prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit.&apos; (NKJV)" />
          <VerseCard reference="&nbsp;John 17:17)" verse="&apos;Sanctify them by Your truth. Your word is truth.&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute translate-x-96" width={700} height={700} viewBox="0 0 24 24"><path fill="currentColor" d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3M8 7h3V5h2v2h3v2h-3v6h-2V9H8z"></path></FadeInSVG>
      </div>
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen my-[100vh] md:-scroll-mb-20">
        <div className="relative my-4 z-10">That the Godhead eternally exists in three persons – the Father, the Son, and the Holy Spirit. God is our Creator, Redeemer, and Sustainer. 
          <VerseCard reference="&nbsp;(Matthew 28:19," verse="&apos;Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,&apos; (NKJV)" />
          <VerseCard reference="&nbsp;2 Corinthians 13:14," verse="&apos;The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Spirit be with you all. Amen.&apos; (NKJV)" />
          <VerseCard reference="&nbsp;James 1:17)" verse="&apos;Every good gift and every perfect gift is from above, and comes down from the Father of lights, with whom there is no variation or shadow of turning.&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute opacity-10 translate-x-36 " width={700} height={700} viewBox="0 0 512 512"><path fill="currentColor" d="M256 74.06c32.76 39.37 52.457 90.004 52.457 145.29c0 21.33-2.937 41.966-8.42 61.534c-28.84-5.284-58.69-5.445-88.098-.09c-5.467-19.54-8.397-40.147-8.397-61.445c0-55.286 19.698-105.92 52.457-145.29zm-.582 220.687c13.13-.026 26.197 1.1 39.057 3.313c-9.017 24.453-22.117 46.918-38.475 66.578c-16.365-19.668-29.47-42.144-38.486-66.61c12.6-2.17 25.28-3.256 37.904-3.28zM199.8 301.82c10.063 28.133 25.12 53.896 44.108 76.224c-41.252 42.28-98.866 68.52-162.68 68.52a229.3 229.3 0 0 1-38.437-3.243c17.722-48.045 51.722-90.41 99.595-118.05c18.446-10.65 37.758-18.414 57.416-23.45zm112.39.025c57.208 14.6 108.705 51.362 140.595 106.593a229.3 229.3 0 0 1 16.4 34.887a229 229 0 0 1-38.414 3.24c-63.812 0-121.426-26.242-162.678-68.52c18.98-22.322 34.037-48.076 44.1-76.2zm180.22 154.888l-5.44-17.162a246.3 246.3 0 0 0-18.597-40.132c-34.176-59.19-89.39-98.733-150.77-114.67c5.76-20.833 8.854-42.767 8.854-65.42c0-60.5-21.98-115.908-58.365-158.695L256 47.435l-12.092 13.218c-36.386 42.787-58.365 98.195-58.365 158.696c0 22.616 3.085 44.517 8.83 65.32c-20.89 5.424-41.4 13.704-60.988 25.013c-52.404 30.254-89.403 77-108.264 129.91l-5.425 17.17l17.498 3.843a246 246 0 0 0 44.036 3.96c68.387 0 130.27-28.075 174.77-73.303c44.5 45.228 106.383 73.302 174.77 73.302c15.04 0 29.76-1.364 44.056-3.963z"></path></FadeInSVG>
      </div>
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen my-[100vh] md:-scroll-mb-20">
        <div className="relative my-4 z-10">That man was created in the image of God and fell in sin by disobedience.
           <VerseCard reference="&nbsp;(Genesis 2:17," verse="&apos;but of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die.”&apos; (NKJV)" />
           <VerseCard reference="&nbsp;Romans 5:18," verse="&apos;Therefore, as through one man’s offense judgment came to all men, resulting in condemnation, even so through one Man’s righteous act the free gift came to all men, resulting in justification of life.&apos; (NKJV)" />
           <VerseCard reference="&nbsp;Ephesians 2:1-3)" verse="&apos;And you He made alive, who were dead in trespasses and sins, in which you once walked according to the course of this world, according to the prince of the power of the air, the spirit who now works in the sons of disobedience, among whom also we all once conducted ourselves in the lusts of our flesh, fulfilling the desires of the flesh and of the mind, and were by nature children of wrath, just as the others.&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute opacity-10 translate-x-36 "  width={600} height={600} viewBox="0 0 512 512"><path fill="currentColor" d="M288 0c17.7 0 32 14.3 32 32v9.8c0 54.6-27.9 104.6-72.5 133.6l.2.3l56.8 80.3H392c15.1 0 29.3 7.1 38.4 19.2l43.2 57.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L384 320h-97.4l92.3 142.6c9.6 14.8 5.4 34.6-9.5 44.3s-34.6 5.4-44.3-9.5L164.5 249.2c-2.9 9.2-4.5 19-4.5 29V352c0 17.7-14.3 32-32 32s-32-14.3-32-32v-73.8c0-65.1 39.6-123.7 100.1-147.9c36.2-14.5 59.9-49.5 59.9-88.5V32c0-17.7 14.3-32 32-32M112 32a48 48 0 1 1 0 96a48 48 0 1 1 0-96"></path></FadeInSVG>
      </div>
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen my-[100vh] md:-scroll-mb-20">
        <div className="relative my-4 z-10">In the virgin birth of the Lord Jesus Christ and that He is the only Savior. 
          <VerseCard reference="&nbsp;(John 3:16," verse="&apos;For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.&apos; (NKJV)" />
          <VerseCard reference="&nbsp;John 14:6," verse="&apos;Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.&apos; (NKJV)" />
          <VerseCard reference="&nbsp;Ephesians 2:1-3)" verse="&apos;Nor is there salvation in any other, for there is no other name under heaven given among men by which we must be saved.”&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute opacity-10 translate-x-36 " width={600} height={600} viewBox="0 0 24 24"><path fill="currentColor" d="m19 1l-1.26 2.75L15 5l2.74 1.26L19 9l1.25-2.74L23 5l-2.75-1.25M9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5M19 15l-1.26 2.74L15 19l2.74 1.25L19 23l1.25-2.75L23 19l-2.75-1.26"></path></FadeInSVG>
      </div>
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen my-[100vh] md:-scroll-mb-20">
        <div className="relative y-4 z-10">That salvation is by grace through faith and not of works. Salvation is the gift of God and is eternally secure. 
          <VerseCard reference="&nbsp;(Ephesians 2:8-9," verse="&apos;For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast.&apos; (NKJV)" />
          <VerseCard reference="&nbsp;John 10:28," verse="&apos;And I give them eternal life, and they shall never perish; neither shall anyone snatch them out of My hand.&apos; (NKJV)" />
          <VerseCard reference="&nbsp;Romans 8:38-39)" verse="&apos;For I am persuaded that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, 39 nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord.&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute opacity-10 translate-x-36 "  width={600} height={600} viewBox="0 0 24 24"><path fill="currentColor" d="M9.06 1.93C7.17 1.92 5.33 3.74 6.17 6H3a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h9V8h2v3h9a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2h-3.17C19 2.73 14.6.42 12.57 3.24L12 4l-.57-.78c-.63-.89-1.5-1.28-2.37-1.29M9 4c.89 0 1.34 1.08.71 1.71S8 5.89 8 5a1 1 0 0 1 1-1m6 0c.89 0 1.34 1.08.71 1.71S14 5.89 14 5a1 1 0 0 1 1-1M2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8h-9v8h-2v-8z"></path></FadeInSVG>
      </div>
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen my-[100vh] md:-scroll-mb-20">
        <div className="relative my-4 z-10">That the Church is the body of Christ, which began on the day of Pentecost with Jesus Christ as the head. The Church is entrusted with the ministries of worship, edification, and evangelism. 
          <VerseCard reference="&nbsp;(Acts 2:14-47," verse="Due to the length of the passage, please read it on your own" />
          <VerseCard reference="&nbsp;Ephesians 2:20-23)" verse="&apos;having been built on the foundation of the apostles and prophets, Jesus Christ Himself being the chief cornerstone, in whom the whole building, being fitted together, grows into a holy temple in the Lord, in whom you also are being built together for a dwelling place of God in the Spirit.&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute opacity-10 translate-x-36 "  width={700} height={700} viewBox="0 0 256 256"><path fill="currentColor" d="M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-48a16 16 0 0 1 32 0v48a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M64 208H40v-51.47l24-14.4Zm152 0h-24v-65.87l24 14.4Z"></path></FadeInSVG>
      </div>
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen my-[100vh] md:-scroll-mb-20">
        <div className="relative my-4 z-10">That baptism and the Lord’s Supper are the only ordinances of the Church instituted by Jesus Christ. 
          <VerseCard reference="&nbsp;(Matthew 28:19," verse="&apos;Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,&apos; (NKJV)" />
          <VerseCard reference="&nbsp;1 Corinthians 11:23-26)" verse="&apos;For I received from the Lord that which I also delivered to you: that the Lord Jesus on the same night in which He was betrayed took bread; and when He had given thanks, He broke it and said, “Take, eat; this is My body which is broken for you; do this in remembrance of Me.” In the same manner He also took the cup after supper, saying, “This cup is the new covenant in My blood. This do, as often as you drink it, in remembrance of Me.” For as often as you eat this bread and drink this cup, you proclaim the Lord’s death till He comes.&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute opacity-10 translate-x-24 flex justify-center "  viewBox="0 0 32 40" width={1000} height={1000}><g data-name="Layer 9"><path fill="currentColor" d="M25,18H17a5,5,0,0,0-5,5v1a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V23A5,5,0,0,0,25,18Zm3,6H14V23a3,3,0,0,1,2-2.82V21a1,1,0,0,0,2,0V20h2v1a1,1,0,0,0,2,0V20h2v1a1,1,0,0,0,2,0v-.82A3,3,0,0,1,28,23Z"/><path fill="currentColor" d="M12,13V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7v6a5,5,0,0,0,4,4.9V24H5a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2H8V17.9A5,5,0,0,0,12,13ZM4,13V8h6v5a3,3,0,0,1-6,0Z"/></g>
        {/* <text x="0" y="47" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Ahmad Roaayala</text><text x="0" y="52" fill="#000000" fontSize="5px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text> */}
        </FadeInSVG>
      </div>
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen my-[100vh] md:-scroll-mb-20">
        <div className="relative my-4 z-10">That the Holy Spirit indwells every believer upon belief in the Lord Jesus.
          <VerseCard reference="&nbsp;(Acts 2:1-4," verse="&apos;When the Day of Pentecost had fully come, they were all with one accord in one place. And suddenly there came a sound from heaven, as of a rushing mighty wind, and it filled the whole house where they were sitting. Then there appeared to them divided tongues, as of fire, and one sat upon each of them. And they were all filled with the Holy Spirit and began to speak with other tongues, as the Spirit gave them utterance.&apos; (NKJV)" />
          <VerseCard reference="&nbsp;Romans 8:9)" verse="&apos;But you are not in the flesh but in the Spirit, if indeed the Spirit of God dwells in you. Now if anyone does not have the Spirit of Christ, he is not His.&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute opacity-10 translate-x-36 "  width={600} height={600} viewBox="0 0 512 512"><path fill="currentColor" d="M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6v-31.5c-22.2-30.3-38-67.3-39.4-110.8c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v64c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8.9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5l75.6-60.5H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80m80-16a16 16 0 1 1 0 32a16 16 0 1 1 0-32"></path></FadeInSVG>
      </div>
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen my-[100vh] md:-scroll-mb-20">
        <div className="relative my-4 z-10">That the Lord Jesus Christ has commissioned His Church to proclaim the Gospel to all people and make disciples of all nations. 
          <VerseCard reference="&nbsp;(Matthew 28:18-20)" verse="&apos;And Jesus came and spoke to them, saying, “All authority has been given to Me in heaven and on earth. Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age.” Amen.&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute opacity-10 translate-x-36 "  width={700} height={700} viewBox="0 0 24 24"><path fill="currentColor" d="m18.44 13.791l-5.499-9.585a2.1 2.1 0 0 0-1.274-.98a2.14 2.14 0 0 0-1.607.205l-1.196.696a.2.2 0 0 0-.078.06l-.069.087a.6.6 0 0 0-.147.275a25.4 25.4 0 0 1-1.588 3.783a6.1 6.1 0 0 1-1.754 1.892l-1.794 1.588a2.14 2.14 0 0 0-.686 1.244a2.3 2.3 0 0 0 .059.98c-.246.136-.46.324-.627.55a2.1 2.1 0 0 0-.363.744a2.2 2.2 0 0 0 0 .833a2.14 2.14 0 0 0 .806 1.397c.22.168.473.29.743.358q.264.071.539.068q.146.015.294 0c.272-.033.533-.127.764-.274c.216.243.489.428.794.54c.237.093.49.14.745.136q.209.005.412-.049l1.597 2.853a2.17 2.17 0 0 0 1.843 1.058a2.14 2.14 0 0 0 2.039-1.578a2.2 2.2 0 0 0-.206-1.607l-1.196-2.078q.484-.108.98-.118c1.395.059 2.782.236 4.146.53h.343l.157-.07l.147-.088l1.049-.607c.482-.279.835-.737.98-1.274a2.14 2.14 0 0 0-.353-1.569M6.551 16.948a.65.65 0 0 1-.431 0a.6.6 0 0 1-.324-.275l-1.49-2.607l-.097-.167a.66.66 0 0 1 .137-.823l1.107-.98l.412.725l2.127 3.725zm10.674-1.96a.7.7 0 0 1-.304.401l-.549.314l-6.136-10.694l.559-.323a.6.6 0 0 1 .48-.059a.63.63 0 0 1 .392.294l5.499 9.576a.66.66 0 0 1 .059.549zm-.255-5.823a.72.72 0 0 1-.637-.362a.735.735 0 0 1 .265-.98l2.45-1.422a.725.725 0 0 1 .98.265a.735.735 0 0 1-.265.98l-2.45 1.421a.7.7 0 0 1-.343.098m4.518 3.47h-2.832a.735.735 0 1 1 0-1.47h2.832a.735.735 0 0 1 0 1.47m-6.831-6.969a.7.7 0 0 1-.363-.098a.726.726 0 0 1-.274-.98l1.411-2.47a.736.736 0 0 1 1.274.735l-1.411 2.46a.73.73 0 0 1-.637.353"></path></FadeInSVG>
      </div>
      <div className="relative snap-start flex justify-center items-center min-h-screen min-w-screen my-[100vh] md:-scroll-mb-20">
        <div className="relative z-10">That the Church will be raptured, followed by the Great Tribulation and Christ’s return to the earth to establish His Millennial Kingdom. 
          <VerseCard reference="&nbsp;(Matthew 24:15-30," verse="Due to the length of the passage, please read this passage on your own." />
          <VerseCard reference="&nbsp;1 Thessalonians 4:16-17," verse="&apos;For the Lord Himself will descend from heaven with a shout, with the voice of an archangel, and with the trumpet of God. And the dead in Christ will rise first. 17 Then we who are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air. And thus we shall always be with the Lord.&apos; (NKJV)" />
          <VerseCard reference="&nbsp;Revelation 20:4-6)" verse="&apos;And I saw thrones, and they sat on them, and judgment was committed to them. Then I saw the souls of those who had been beheaded for their witness to Jesus and for the word of God, who had not worshiped the beast or his image, and had not received his mark on their foreheads or on their hands. And they lived and reigned with Christ for a thousand years. But the rest of the dead did not live again until the thousand years were finished. This is the first resurrection. Blessed and holy is he who has part in the first resurrection. Over such the second death has no power, but they shall be priests of God and of Christ, and shall reign with Him a thousand years.&apos; (NKJV)" />
        </div>
        <FadeInSVG className="absolute opacity-10 translate-x-36 " width={700} height={700} viewBox="0 0 16 16"><path fill="currentColor" d="M8.999 6a3.5 3.5 0 0 0-3.464 3H5.5a2.5 2.5 0 0 0 0 5h7a2.5 2.5 0 0 0 0-5h-.037A3.5 3.5 0 0 0 9 6m-.212-3.18a.5.5 0 1 0-.883-.47l-.426.803a.5.5 0 0 0 .883.47zm-3.772-.747a.5.5 0 1 0-.957.293l.267.87a.5.5 0 0 0 .956-.293zM3 7c0 .604.179 1.166.486 1.637c.367-.259.787-.45 1.24-.551a4.51 4.51 0 0 1 3.56-3.03A3 3 0 0 0 3 7M1.82 4.214a.5.5 0 1 0-.47.883l.803.426a.5.5 0 0 0 .47-.883zm.416 4.463a.5.5 0 0 0-.293-.956l-.87.266a.5.5 0 1 0 .293.956z"></path></FadeInSVG>
      </div>
    </div>
    </div>
  )
}

export default Beliefs