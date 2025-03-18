"use client"

import { Calendar } from "@/components/ui/calendar"
import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  




function Meetings() 
{
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    const [cardData, setCardData] = useState("");

    const handleCalendarData = (data: string): void => {
        setCardData(data);
      };

    return(
        <div className="flex flex-col justify-center w-full border-red-800">
        <h1 className="flex justify-center text-2xl">Meeting Schedule</h1>
        <div className="h-full w-full md:grid grid-cols-2 px-[10vw]">
            <Calendar 
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md w-[275px]"
                sendData={handleCalendarData}
            />
            <AnimatePresence>
            {cardData === 'Sunday' &&
                <motion.div
                key='sundayCard'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                className="w-[275px] md:w-96">  
                <Card className="bg-amber-200">
                    <CardHeader>
                        <CardTitle className="flex justify-center">Sunday</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center items-center">
                        <div>10:00am - 11:00am</div>
                        <div>Breaking of Bread</div>
                        <div>11:00am - 12:00pm</div>
                        <div>Word Ministry</div>
                        <div>12:00pm - 12:45pm</div>
                        <div>Fellowship & Snacks</div>
                        <div>12:45pm - 1:30pm</div>
                        <div>Sunday School & Bible Study</div>
                    </CardContent>
                </Card>
                </motion.div>
            }  
            {cardData === 'Wednesday' &&
                <motion.div
                key='wednesdayCard'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                className="w-[275px] md:w-96"> 
                <Card className="bg-orange-400">
                    <CardHeader>
                        <CardTitle className="flex justify-center">Wednesday</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center items-center">
                        <div>7:00pm - 8:00pm</div>
                        <div>Prayer Meeting</div>
                    </CardContent>
                </Card>
                </motion.div>
            }
            {cardData === 'Saturday' &&
                <motion.div
                key='satCard'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                className="w-[275px] md:w-96"> 
                <Card className="text-white bg-indigo-950">
                    <CardHeader>
                        <CardTitle className="flex justify-center">Saturday</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center items-center">
                        <div>7:00pm - 8:00pm</div>
                        <div>Bible Study</div>
                    </CardContent>
                </Card>
                </motion.div>
            }
            {cardData === 'fSaturday' &&
                <motion.div
                key='fsatCard'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                className="w-[275px] md:w-96"> 
                <Card className="text-white bg-indigo-900">
                    <CardHeader>
                        <CardTitle className="flex justify-center">Saturday</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center items-center">
                        <div>7:00pm - 8:00pm</div>
                        <div>Letter Writing</div>
                    </CardContent>
                </Card>
                </motion.div>
            }
            {cardData != 'Sunday' && cardData != 'Saturday' && cardData != 'Wednesday' && cardData != 'fSaturday' &&
                <motion.div
                key='defCard'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                className="w-[275px] md:w-96"> 
                <Card>
                    <CardHeader>
                        <CardTitle>Hover Over/Click a Day</CardTitle>
                    </CardHeader>
                </Card>
                </motion.div>
            }
            </AnimatePresence>
        </div>
        </div>
    )
}

export default Meetings