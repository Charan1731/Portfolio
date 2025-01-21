import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'
import Image from 'next/image';

const Achievements = () => {
  return (
    <div className='py-20' id='achievements'>
        <h1 className='heading'>
            <span className='text-purple'>Achievements</span>
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