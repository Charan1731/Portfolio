import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { FloatingAnimation } from './ui/floating-animation'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='w-full pt-16 pb-10 relative' id='contact'>
         <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none'></div>
         <div className='flex flex-col items-center relative z-10'>
            <FloatingAnimation yOffset={3} duration={2}>

            <span className="px-4 py-1 bg-purple/10 rounded-full text-purple text-sm inline-block mb-4 backdrop-blur-sm border border-purple/20">GET IN TOUCH</span>
            </FloatingAnimation>
            <h1 className='heading lg:max-w-[45vw]'>Ready to take
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue-400'> your </span> digital presence to the next level
            </h1>
            <p className='text-gray-400 md:mt-6 my-5 text-center max-w-xl'>Let&apos;s collaborate on your next project and create something amazing together</p>
            <FloatingAnimation yOffset={3} duration={2}>

            <a href="mailto:charan23114@gmail.com" className="mt-4 transform hover:scale-105 transition-all duration-300">
                <MagicButton
                    title="Let&apos;s connect"
                    icon={<FaLocationArrow/>}
                    />
            </a>
            </FloatingAnimation>
         </div>
         <div className='flex mt-20 md:flex-row flex-col justify-between items-center border-t border-white/10 pt-8'>
            <p className='md:text-base text-sm md:font-normal font-light text-gray-400'>Copyright © {currentYear} Charan. All rights reserved.</p>
            <div className='flex items-center md:gap-4 gap-6 mt-6 md:mt-0'>
                <a href="/resume.pdf" download className="text-gray-400 hover:text-purple-400 transition-colors duration-300">Download Resume</a>
                {socialMedia.map((profile) => (
                    <div 
                        key={profile.id} 
                        className='w-10 h-10 cursor-pointer flex justify-center items-center rounded-lg border border-white/10 backdrop-blur-lg saturate-180 bg-black-200/75 hover:bg-purple/20 hover:border-purple/30 transition-all duration-300'
                    >
                        <Link href={profile.url} target="_blank">
                            <Image src={profile.img} alt="profile" height={20} width={20} />
                        </Link>
                    </div>
                ))}
            </div>
         </div>
    </footer>
  )
}

export default Footer