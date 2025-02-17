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
import { Church, FileBadge, House, Mail, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from 'next/navigation';




function Sidebar() {
    const [rotate, setRotate] = useState(0);
    const [moveX, setMoveX] = useState(0); // Track horizontal movement
    const [color, setColor] = useState("black"); // Track color
    const router = useRouter();

    const startHover = () => {
        setRotate(-45);
        setMoveX(moveX - 50);
        setTimeout(() => {
            setColor("#ffecb3"); 
        }, 100); 
        setTimeout(() => {
            setRotate(0);
        }, 200);      
    };
    const endHover = () => {
        setRotate(45);
        setMoveX(moveX + 50);  
        setTimeout(() => {
            setColor("black"); 
        }, 100);  
        setTimeout(() => {
            setRotate(0);
        }, 200);   
    };

  return (
    <div className="bg-amber-100 h-screen p-4">
        <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side={'left'} className="w-52 bg-amber-100">
            <SheetTitle className="flex items-center justify-center">Other Pages</SheetTitle>
            <div className="flex flex-col items-center justify-center w-full gap-4 my-6">
                <SheetClose asChild>
                    <Link href='/' className="flex flex-row items-start gap-1 hover:text-red-800" onMouseEnter={startHover} onMouseLeave={endHover}>
                        <motion.div
                        animate={{color: color}}
                        >
                            Home
                        </motion.div>
                        <motion.div
                        animate={{ rotate, x: moveX}} // Bind rotation to state
                        transition={{ duration: 0.3 }}
                        className="bg-amber-100 border"
                        >
                            <House />
                        </motion.div>
                    </Link>
                </SheetClose>
                    <Link href='/' className="flex flex-row items-start gap-1 hover:text-red-800">
                        About
                        <Church />
                    </Link>
                    <Link href='/' className="flex flex-row items-start gap-1 hover:text-red-800">
                        Meetings
                        <Users />
                    </Link>
                    <Link href='/' className="flex flex-row items-start gap-1 hover:text-red-800">
                        Beliefs
                        <FileBadge />
                    </Link>
                    <Link href='/' className="flex flex-row items-start gap-1 hover:text-red-800">
                        Contact
                        <Mail />
                    </Link>
            </div>
        </SheetContent>
        </Sheet>

    </div>
  )
}

export default Sidebar