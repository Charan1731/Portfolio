import { workExperience } from '@/data'
import React from 'react'
import { ButtonDiv } from './ui/moving-border'
import Image from 'next/image'
import { FloatingAnimation } from './ui/floating-animation'

const Education = () => {
  return (
    <div className='section-padding' id='education'>
        <div className="text-center mb-16 -mt-10">
          <FloatingAnimation yOffset={3} duration={2}>
            <span className="section-title-badge">ACADEMIC BACKGROUND</span>
          </FloatingAnimation>
            <h1 className='heading'>
                My
                <span className='gradient-text'> Education</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400">My academic journey and educational qualifications</p>
        </div>

        <div className='w-full mt-16 grid lg:grid-cols-4 grid-cols-1 gap-10'>
          {workExperience.map((card) => (
            <ButtonDiv 
            key={card.id} 
            borderRadius='1.75rem' 
            className='flex-1 text-white border-neutral-200 dark:border-slate-800 hover-scale' 
            duration={Math.floor(Math.random()*10000)+10000}>
              <div className='flex flex-col p-6 gap-4 min-h-[200px] justify-center'>
                <div className="flex justify-center">
                  <Image 
                    src={card.thumbnail} 
                    alt={card.thumbnail} 
                    className='w-24 h-24 object-contain' 
                    width={96} 
                    height={96}
                    />
                </div>
                <div className='mt-2 text-center'>
                  <h1 className='text-xl md:text-2xl font-bold'>
                    {card.title}
                  </h1>
                  <p className='text-gray-300 mt-2 font-medium'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </ButtonDiv>
          ))}
        </div>
    </div>
  )
}

export default Education