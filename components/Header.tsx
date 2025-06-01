"use client"
import {
    Sheet,
    SheetContent,
    SheetTitle,
  } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import PageLink from "./PageLink"
import { useState } from "react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"



function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const openSheet = () => {
    setSheetOpen(!sheetOpen);
  }

  const {theme, setTheme} = useTheme();

  return (
    <div className="top-0 flex justify-between p-4 bg-[#F4A261] dark:bg-cyan-900 min-w-screen w-auto">
        <div className="text-2xl">Agape Brethren Assembly</div>
        <div className="flex flex-row space-x-1">
          {theme === 'dark' ? <Button onClick={() => setTheme("light")}><Sun/></Button> : <Button onClick={() => setTheme("dark")}><Moon/></Button>}
          <div className="md:hidden flex justify-start items-center">
            <Button onClick={openSheet}><Menu className="hover:text-red-800"/></Button>
            <Sheet open={sheetOpen}>
            <SheetContent side={'right'} className="w-52 bg-amber-100 min-h-screen">
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