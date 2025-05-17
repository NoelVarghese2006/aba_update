import { Berkshire_Swash } from 'next/font/google'

const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <div className="p-4">
      <div className={bs.className}>
      <div className="flex justify-center text-8xl text-center">Agape Brethren Assembly</div>
      <br />
      <div className="flex justify-center text-5xl">Unconditional Love</div>
      <br />
      <div className="flex justify-center text-2xl">Welcome!</div>
      </div>
      <div className="flex justify-center">We are a group of believers who gather in the name of Jesus Christ according to the New Testament principles. Please view the other pages if you want to know more about our assembly, and God bless you.</div>
    </div>
  );
}
