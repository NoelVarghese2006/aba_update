"use client"
import {
    Sheet,
    SheetContent,
    SheetTitle,
  } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import PageLink from "./PageLink"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { Berkshire_Swash } from 'next/font/google'


const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })

function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const openSheet = () => {
    setSheetOpen(!sheetOpen);
  }

  const {theme, setTheme} = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid SSR mismatch

  return (
    <div className={`top-0 flex justify-between p-4 bg-gray-100 dark:bg-black text-orange-500 dark:text-cyan-700 min-w-screen w-auto ${bs.className}`}>
        <div className="text-2xl hidden sm:block">Agape Brethren Assembly</div>
        <div className="text-2xl sm:hidden">ABA</div>
        <div className="flex flex-row space-x-1">
          {theme === 'dark' ? <Button onClick={() => setTheme("light")}><Sun/></Button> : <Button onClick={() => setTheme("dark")}><Moon/></Button>}
          <div className="md:hidden flex justify-start items-center">
            <Button onClick={openSheet}><Menu className="hover:text-orange-700 dark:hover:text-cyan-300"/></Button>
            <Sheet open={sheetOpen}>
            <SheetContent side={'right'} className="w-52 bg-orange-200 dark:bg-cyan-700 min-h-screen dark:text-white">
                <SheetTitle className="flex items-center justify-center">Other Pages</SheetTitle>
                <div className="flex flex-col items-center justify-center w-full gap-4 my-6" onClick={openSheet}>
                        <PageLink text='Home' link='/' img='House'/>
                        <PageLink text='About' link='/about' img='Church'/>
                        <PageLink text='Meetings' link='/meetings' img='Users'/>
                        <PageLink text='Beliefs' link='/beliefs' img='FileBadge'/>
                        <PageLink text='Contact' link='/contact' img='Mail'/>
                </div>
            </SheetContent>
            </Sheet>
          </div>
        </div>
    </div>
  )
}

export default Header