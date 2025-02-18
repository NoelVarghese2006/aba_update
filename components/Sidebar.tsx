import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Church, FileBadge, House, Mail, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import PageLink from "./PageLink"




function Sidebar() {
  return (
    <div className="bg-amber-100 h-screen p-4">
        <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side={'left'} className="w-52 bg-amber-100">
            <SheetTitle className="flex items-center justify-center">Other Pages</SheetTitle>
            <div className="flex flex-col items-center justify-center w-full gap-4 my-6">
                <SheetClose asChild>
                    <PageLink text='Home' link='/' img='House'/>
                </SheetClose>
                <SheetClose asChild>
                    <PageLink text='About' link='/about' img='Church'/>
                </SheetClose>
                <SheetClose asChild>
                    <PageLink text='Meetings' link='/' img='Users'/>
                </SheetClose>
                <SheetClose asChild>
                    <PageLink text='Beliefs' link='/' img='FileBadge'/>
                </SheetClose>
                <SheetClose asChild>
                    <PageLink text='Contact' link='/' img='Mail'/>
                </SheetClose>
            </div>
        </SheetContent>
        </Sheet>

    </div>
  )
}

export default Sidebar