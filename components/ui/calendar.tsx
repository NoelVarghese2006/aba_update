"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker, DayPickerProps } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = DayPickerProps & {
  sendData: (data: string) => void;  // Add sendData prop
};

const Calendar: React.FC<CalendarProps> = ({
  className,
  classNames,
  showOutsideDays = true,
  sendData,  // Destructure sendData from props
  ...props  // Destructure the remaining DayPicker props
}) => 
{
  const [sundays, setSundays] = React.useState<Date[]>([]);
  const [saturdays, setSat] = React.useState<Date[]>([]);
  const [wednesdays, setWed] = React.useState<Date[]>([]);
  const [fSaturdays, setFSaturdays] = React.useState<Date[]>([]);
  const [currDay, setCurrDay] = React.useState('Sunday');


  const handleClick = (day : string): void => {
    sendData(day);  // Call sendData function passed from the parent
    console.log(currDay);
  };
    

  const getNextDay = (date: Date, targetDay: number): Date => {
    const nextDay = new Date(date);
    const currentDay = nextDay.getDay(); // Get current day (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const daysUntilTargetDay = (targetDay - currentDay + 7) % 7; // Calculate the number of days to add
    nextDay.setDate(nextDay.getDate() + daysUntilTargetDay); // Set the date to next target day
    return nextDay;
  };

  // Generate an array of the next N occurrences of a specific day
  const generateWeekDays = (numOfDays: number, targetDay: number): Date[] => {
    const weekDaysArray: Date[] = [];
    const currentDay = getNextDay(new Date(), targetDay); // Start with the first occurrence of the target day
    for (let i = 0; i < numOfDays; i++) {
      weekDaysArray.push(new Date(currentDay)); // Add current day to the array
      currentDay.setDate(currentDay.getDate() + 7); // Move to the next occurrence (7 days later)
    }
    return weekDaysArray;
  };

  function splitSaturdays(sats: Date[]){
    for (const sat of sats) {
      // Check if the Saturday's day of the month is less than 8
      if (sat.getDate() < 8) {
        setFSaturdays((prevItems) => [...prevItems, sat]);
      }
      else {
        setSat((prevItems) => [...prevItems, sat]);
      }
    }
  };

  React.useEffect(() => {
    // Example: Generate the next 5 Sundays (0 = Sunday, 6 = Saturday)
    const upcomingSundays = generateWeekDays(5, 0);  // 0 for Sunday
    const upcomingSaturdays = generateWeekDays(5, 6);
    const upcomingWednesdays = generateWeekDays(5, 3);
    splitSaturdays(upcomingSaturdays);
    setSundays(upcomingSundays);
    setWed(upcomingWednesdays);
  }, [generateWeekDays]);

  return (
      <DayPicker
        modifiers={{sundays, wednesdays, saturdays, fSaturdays}}
        onDayPointerEnter={(date, modifiers) => {
          if (modifiers.sundays) {
            setCurrDay('Sunday');
            handleClick('Sunday');
          }
          else if(modifiers.saturdays)
          {
            setCurrDay('Saturday');
            handleClick('Saturday');
          }
          else if(modifiers.wednesdays)
          {
            setCurrDay('Wednesday');
            handleClick('Wednesday');
          }
          else if(modifiers.fSaturdays)
          {
            setCurrDay('fSaturday');
            handleClick('fSaturday');
          }
        }}
        modifiersClassNames={{
          sundays: "bg-amber-200",
          wednesdays: "bg-orange-400",
          saturdays: "text-white bg-indigo-950",
          fSaturdays: "text-white bg-indigo-900"
        }}
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight className={cn("h-4 w-4", className)} {...props} />
          ),
        }}
        {...props}
      />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
