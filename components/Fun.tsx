import React from 'react'
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from './ui/text-reveal-card'

const Fun = () => {
  return (
        <div className="flex items-center justify-center bg-[#010319] h-[20rem] rounded-2xl w-full mb-20">
            <TextRevealCard
                text="I know evertthing Jon"
                revealText="You know nothing Snow "
            >
            <TextRevealCardTitle>
            Sometimes, you just need to see it.
            </TextRevealCardTitle>
            <TextRevealCardDescription>
            This is a text reveal card. Hover over the card to reveal the hidden
            text.
            </TextRevealCardDescription>
            </TextRevealCard>
        </div>
  )
}

export default Fun