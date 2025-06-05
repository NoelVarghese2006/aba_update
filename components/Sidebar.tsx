"use client"

import PageLink from "./PageLink"
import { useState } from "react"




function Sidebar() {
    const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
    <div className="hidden md:flex flex-col bg-orange-200 dark:bg-cyan-700 h-full min-h-screen w-auto p-4 justify-start">
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