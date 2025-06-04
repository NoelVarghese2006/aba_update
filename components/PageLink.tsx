"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { Church, FileBadge, House, Mail, Users } from "lucide-react"
import { useTheme } from "next-themes";


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

    const {theme} = useTheme();

    const [rotate, setRotate] = useState(0);
    const [moveX, setMoveX] = useState(0); // Track horizontal movement
    const [color, setColor] = useState("#000"); // Track color
    const [tempX, setTempX] = useState(0);
    const [currX, setCurrX] = useState(offset);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if(typeof theme != "undefined" && typeof window != "undefined")
            if (theme === "dark") {
            setColor("#fff");
            } else {
            setColor("#000");
            }
    }, [theme]);



    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Avoid SSR mismatch

    const startHover = (e: React.MouseEvent) => {
        if(window.innerWidth < 768) {
            setTimeout(() => {
                setColor(theme === 'light' ? "#ffd6a8" : "#0e7490"); 
            }, 100); 
            return;
        }
        setCurrX(e.clientX)
        if(Math.abs(e.clientX - currX) < 10)
            setRotate((e.clientX-currX) * 10);
        else
            setRotate((e.clientX-currX));
        offset = offset * (window.innerWidth / 1528) + 20 * 1528 / window.innerWidth - 20;
        setTempX(-offset + e.clientX)
        setMoveX(-offset + e.clientX);
        setTimeout(() => {
            setColor(theme === 'light' ? "#ffd6a8" : "#0e7490"); 
        }, 10); 
        setTimeout(() => {
            setRotate(0);
        }, 200);      
    };
    const endHover = () => {
        setTimeout(() => {
            if(theme === 'light')
                setColor("#000"); 
            else
                setColor("#FFF");
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
    className="flex flex-row items-start gap-1 hover:text-orange-700 dark:hover:text-cyan-300" 
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
        className="bg-orange-200 dark:bg-cyan-700"
        >
            {img === "House" ? <House /> : img === "Church" ? <Church /> : img === "Users" ? <Users /> : img === "FileBadge" ? <FileBadge /> : img === "Mail" ? <Mail /> : null}
        </motion.div>

    </Link>
  )
}

export default PageLink