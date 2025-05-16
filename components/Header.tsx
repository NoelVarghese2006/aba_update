"use client"
import {
    Sheet,
    SheetContent,
    SheetTitle,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import PageLink from "./PageLink"
import { useState } from "react"



function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const openSheet = () => {
    setSheetOpen(!sheetOpen);
  }

  return (
    <div className="flex justify-between p-4 bg-amber-50 min-w-screen w-auto">
        <div className="text-2xl">Agape Brethren Assembly</div>
        <div className="md:hidden pt-1">
          <div onClick={openSheet}>
              <Menu className="hover:text-red-800"/>
          </div>
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
  )
}

export default Header