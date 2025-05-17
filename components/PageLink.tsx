"use client"
import Link from "next/link"
import { useState } from "react";
import { motion } from "framer-motion"
import { Church, FileBadge, House, Mail, Users } from "lucide-react"


interface PageLink {
    text: string;
    link: string;
    img: string;
}


function PageLink({text, link, img}: PageLink) {
    let offset = 126;
    if(text === "Meetings")
        offset = 135;
    if(text === "Contact")
        offset = 130;

    const [rotate, setRotate] = useState(0);
    const [moveX, setMoveX] = useState(0); // Track horizontal movement
    const [color, setColor] = useState("#000"); // Track color
    const [tempX, setTempX] = useState(0);
    const [currX, setCurrX] = useState(offset);

    const startHover = (e: React.MouseEvent) => {
        if(window.innerWidth < 768) {
            setTimeout(() => {
                setColor("#991b1b"); 
            }, 100); 
            return;
        }
        setCurrX(e.clientX)
        if(Math.abs(e.clientX - currX) < 10)
            setRotate((e.clientX-currX) * 10);
        else
            setRotate((e.clientX-currX));
        setTempX(-offset + e.clientX)
        setMoveX(-offset + e.clientX);
        setTimeout(() => {
            setColor("#FEF3C7"); 
        }, 100); 
        setTimeout(() => {
            setRotate(0);
        }, 200);      
    };
    const endHover = () => {
        setTimeout(() => {
            setColor("#000"); 
        }, 100); 
        if(window.innerWidth < 768) return;
        setRotate(-tempX);
        setMoveX(0);  
        setCurrX(offset);
        setTimeout(() => {
            setRotate(0);
        }, 200);   
    };

  return (
    <Link 
    href={link}
    className="flex flex-row items-start gap-1 hover:text-red-800" 
    onMouseOver={startHover} 
    onMouseLeave={endHover}>
        <motion.div
        animate={{color: color}}
        >
            {text}
        </motion.div>
        <motion.div
        animate={{ rotate, x: moveX}} // Bind rotation to state
        transition={{ duration: 0.3 }}
        className="bg-amber-100"
        >
            {img === "House" ? <House /> : img === "Church" ? <Church /> : img === "Users" ? <Users /> : img === "FileBadge" ? <FileBadge /> : img === "Mail" ? <Mail /> : null}
        </motion.div>

    </Link>
  )
}

export default PageLink