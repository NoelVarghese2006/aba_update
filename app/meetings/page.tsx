"use client"

import { Calendar } from "@/components/ui/calendar"
import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
        <div className="h-full w-full md:flex">
            <Calendar 
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border w-[275px]"
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
                        <div>10:00am - 11:45am</div>
                        <div>Breaking of Bread & Word Ministry</div>
                        <div>11:45am - 12:15pm</div>
                        <div>Fellowship & Snacks</div>
                        <div>12:15pm - 1:15pm</div>
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
                        <CardTitle>Hover Over a Day</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}

export default Meetings