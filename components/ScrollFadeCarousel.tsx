"use client"

import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

const items = ["🍎", "🍊", "🍇", "🍌", "🍉"]

export default function ScrollFadeCarousel() {
  return (
    <div className="relative h-[300vh] bg-white">
      <div className="sticky top-1/2 -translate-y-1/2 h-64 flex items-center justify-center">
        {items.map((emoji, i) => (
          <FadeItem key={i} index={i} emoji={emoji} />
        ))}
      </div>
    </div>
  )
}

interface FadeItemProps {
  index: number
  emoji: string
}

function FadeItem({ index, emoji }: FadeItemProps) {
  return (
    <motion.div
      className="absolute text-9xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        top: 0,
        left: 0,
        right: 0,
        textAlign: "center",
      }}
      viewport={{
        margin: "-40% 0% -40% 0%", // Trigger when near middle
        amount: 0.5,
      }}
    >
      {emoji}
    </motion.div>
  )
}
