import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pt-10 pb-10' id='contact'>
         <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <Image src="/footer-grid.svg" alt="grid"  className='w-full opacity-90' width={50} height={50}/>
         </div>
         <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Ready to take
                <span className='text-purple'> your </span> outside digital presence to next level
            </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'></p>
                <a href="mailto:charan23114@gmail.com">
                    <MagicButton
                        title = "Let's connect"
                        icon = {<FaLocationArrow/>}
                    />
                </a>
         </div>
         <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © {new Date().getFullYear()} Charan </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    // <a href={profile.url} target='_blank'>
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter rounded-lg border border-black-300 backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200'>
                            <Image src={profile.img} alt="proifle" height={20} width={20} />
                        </div>
                    // </a>
                ))}
            </div>
         </div>
    </footer>
  )
}

export default Footer