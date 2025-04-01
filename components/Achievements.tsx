import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'
import Image from 'next/image';
import { TextHighlight } from './ui/text-highlight';

const Achievements = () => {
  return (
    <div className='py-20' id='achievements'>
        <h1 className='heading'>
            <TextHighlight 
              highlightColor="#CBACF9" 
              highlightHeight={12} 
              highlightOffset={-2}
              autoAnimate={true}
            >
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue-400'>Achievements</span>
            </TextHighlight>
        </h1>
        <div className='flex flex-col items-center mt-20'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='fast'
                />
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
                {companies.map(({id,name,nameImg}) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <Image src={nameImg} alt={name} className='md:w-38 w-40' width={50} height={50} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Achievements