"use client"

import { Calendar } from "@/components/ui/calendar"
import React, { useEffect } from "react"
import { useState } from "react"

import { Berkshire_Swash } from 'next/font/google'
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
  
const bs = Berkshire_Swash({ subsets: ['latin'], weight: ['400'] })
  




function Meetings(e: React.MouseEvent) 
{
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [cardData, setCardData] = useState("");
    const [open, setOpen] = useState(false);
    const [openWhich, setOpenWhich] = useState(0);

    const handleCalendarData = (data: string): void => {
        setCardData(data);
    };

    const handleClose = () => {
        setOpen(false);
        setCardData("");
    }

    useEffect(() => {
    if (cardData === 'Sunday') {
      setOpen(true)
      setOpenWhich(1);
    }
    else if(cardData === 'Wednesday'){
        setOpen(true);
        setOpenWhich(2);
    }
    else if(cardData === 'Saturday'){
        setOpen(true);
        setOpenWhich(3);
    }
    else if(cardData === 'fSaturday'){
        setOpen(true)
        setOpenWhich(4);
    }
    }, [cardData])

    return(
        <div className="flex flex-col w-full border-red-800 m-0 h-screen">
        <div className={bs.className}><h1 className="flex justify-center text-4xl p-10">Meeting Schedule</h1></div>

        <Calendar 
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md mx-auto"
                sendData={handleCalendarData}
        /> 
        {openWhich == 1 && 
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="flex flex-col justify-center items-center text-center bg-amber-300 text-black">
                <DialogHeader className={bs.className}>
                        <DialogTitle className="flex justify-center">Sunday</DialogTitle>
                </DialogHeader>
                <div className="font-bold">10:00am - 11:00am</div>
                <div>Breaking of Bread</div>
                <div className="font-bold">11:00am - 12:00pm</div>
                <div>Word Ministry</div>
                <div className="font-bold">12:00pm - 12:45pm</div>
                <div>Fellowship & Snacks</div>
                <div className="font-bold">12:45pm - 1:30pm</div>
                <div>Sunday School & Bible Study</div>
            </DialogContent>
        </Dialog>
        }
        {openWhich == 2 && 
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="flex flex-col justify-center items-center text-center bg-orange-400">
                <DialogHeader className={bs.className}>
                        <DialogTitle className="flex justify-center">Wednesday</DialogTitle>
                </DialogHeader>
                <div className="font-bold">7:00pm - 8:00pm</div>
                <div>Prayer Meeting</div>
            </DialogContent>
        </Dialog>
        }
        {openWhich == 3 && 
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="flex flex-col justify-center items-center text-center bg-indigo-950 text-white">
                <DialogHeader className={bs.className}>
                        <DialogTitle className="flex justify-center">Saturday</DialogTitle>
                </DialogHeader>
                <div className="font-bold">7:00pm - 8:00pm</div>
                <div>Bible Study</div>
            </DialogContent>
        </Dialog>
        }
        {openWhich == 4 && 
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="flex flex-col justify-center items-center text-center bg-indigo-800 text-white">
                <DialogHeader className={bs.className}>
                        <DialogTitle className="flex justify-center">First Saturday</DialogTitle>
                </DialogHeader>
                <div className="font-bold">7:00pm - 8:00pm</div>
                <div>Letter Writing</div>
            </DialogContent>
        </Dialog>
        }
        </div>
    )
}

export default Meetings