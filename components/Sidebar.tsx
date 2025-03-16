"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Church, FileBadge, House, Mail, Menu, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import PageLink from "./PageLink"
import { useState } from "react"




function Sidebar() {
    const [sheetOpen, setSheetOpen] = useState(false);

    const openSheet = () => {
        setSheetOpen(!sheetOpen);
    }

  return (
    <>
    <div className="md:hidden bg-amber-100 min-h-screen h-auto p-4">
        <div onClick={openSheet}>
            <Menu className="hover:text-red-800"/>
        </div>
        <Sheet open={sheetOpen}>
        <SheetContent side={'left'} className="w-52 bg-amber-100 min-h-screen">
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
    <div className="hidden md:block bg-amber-100 h-screen p-4">
            <div className="text-lg font-semibold flex justify-center">Other Pages</div>
            <div className="flex flex-col items-center justify-center w-[11vw] gap-4 my-6">
                    <PageLink text='Home' link='/' img='House'/>
                    <PageLink text='About' link='/about' img='Church'/>
                    <PageLink text='Meetings' link='/meetings' img='Users'/>
                    <PageLink text='Beliefs' link='/beliefs' img='FileBadge'/>
                    <PageLink text='Contact' link='/contact' img='Mail'/>
            </div>
    </div>
    </>
  )
}

export default Sidebar