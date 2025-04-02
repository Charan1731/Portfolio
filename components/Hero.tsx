import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { GrConnect } from "react-icons/gr"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FloatingAnimation } from './ui/floating-animation'
import { TextScramble } from './ui/text-scramble'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 relative'>

        <div>
            <Spotlight
                className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
                fill='white'
            />
            <Spotlight
                className='top-10 left-full h-[80vh] w-[50vw]'
                fill='purple'
            />
            <Spotlight
                className='top-28 left-80 h-[80vh] w-[50vh]'
                fill='pink'
            />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 z-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>  
        <div className='flex justify-center relative my-20 z-30'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <FloatingAnimation yOffset={5} duration={3} delay={0.5}>
                  <div className="px-4 py-1 bg-purple/10 rounded-full mb-4 backdrop-blur-sm border border-purple/20">
                      <h2 className='uppercase tracking-widest text-xs text-center text-purple'>
                        <TextScramble 
                          text="Crafting dynamic sites with Next.js" 
                          scrambleOnMount={true}
                        />
                      </h2>
                  </div>
                </FloatingAnimation>
                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple to-blue-400'
                    words='Crafting Innovative Solutions, One Line of Code at a Time.'
                />
                <p className='text-center md:tracking-wider mb-6 text-small md:text-large lg:text-xl mt-4 text-gray-300 max-w-2xl'>
                    Hi, I&apos;m Charan, a CS major student at CVR College of Engineering passionate about building beautiful and functional web experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <FloatingAnimation yOffset={3} duration={2}>
                      <a href="https://www.linkedin.com/in/charandeep-reddy-2640a4301/" target='_blank' rel="noreferrer">
                          <MagicButton
                              title="Let's Connect"
                              otherClasses='mt-2'
                              icon={<GrConnect className='hover:text-black-100'/>}
                          />
                      </a>
                    </FloatingAnimation>
                    <div className="flex gap-4 mt-4 sm:mt-2">
                      <FloatingAnimation yOffset={3} duration={2.5} delay={0.1}>
                        <a href="https://github.com/Charan1731" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaGithub size={24} />
                        </a>
                      </FloatingAnimation>
                      <FloatingAnimation yOffset={3} duration={2.5} delay={0.2}>
                        <a href="https://www.linkedin.com/in/charandeep-reddy-2640a4301/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                      </FloatingAnimation>
                      <FloatingAnimation yOffset={3} duration={2.5} delay={0.3}>
                        <a href="https://x.com/CharanR18433412" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <FaTwitter size={24} />
                        </a>
                      </FloatingAnimation>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero