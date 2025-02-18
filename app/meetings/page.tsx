"use client"

import { Calendar } from "@/components/ui/calendar"
import React from "react"
import { useState } from "react"



function Meetings() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return(
        <div>
            <Calendar 
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
        </div>
    )
}

export default Meetings