import React from 'react'
import MediaQuery from 'react-responsive'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';


interface Verse {
    reference: string;
    verse: string;
}

function VerseCard({reference, verse}: Verse) {
  return (
    <>
    <MediaQuery minWidth={640}>
          <HoverCard>
            <HoverCardTrigger>{reference}</HoverCardTrigger>
            <HoverCardContent>
              {verse}
            </HoverCardContent>
          </HoverCard>
    </MediaQuery>
    <MediaQuery maxWidth={640}>
        <Popover>
            <PopoverTrigger>{reference}</PopoverTrigger>
            <PopoverContent>
              {verse}
            </PopoverContent>
        </Popover>
    </MediaQuery>
    </>
  )
}

export default VerseCard