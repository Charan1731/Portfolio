import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

export default function RecentProjects() {
    return (
      <section id='projects' className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
        <div className='py-20 relative z-10'>
          <div className="text-center mb-16">
            <span className="px-4 py-1 bg-purple/10 rounded-full text-purple text-sm inline-block mb-4 backdrop-blur-sm border border-purple/20">PORTFOLIO</span>
            <h1 className='heading'>
              A selection of {' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue-400'>recent projects</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400">Showcasing my latest work and development projects built with modern technologies</p>
          </div>
          <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-12 mt-10'>
            {projects.map(({ id, title, des, img, iconLists, link }) => (
              <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[90vw] transform transition-transform hover:scale-[1.01] duration-500'>
                <PinContainer title="visit" href={link}>
                  <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 rounded-xl border border-white/10'>
                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                      <Image src="/bg.png" alt="bg" width={50} height={50} />
                    </div>
                    <Image src={img} alt="cover" className='z-10 absolute bottom-0 hover:scale-105 transition-transform duration-500' height={500} width={500} />
                  </div>
                  <h1 className='font-bold lg:text-2xl md:text-xl line-clamp-1 text-base'>
                    {title}
                  </h1>
                  <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-gray-300 mt-2'>
                    {des}
                  </p>
                  <div className='flex items-center justify-between mt-7 mb-3'>
                    <div className='flex items-center'>
                      {iconLists.map((icon, index) => (
                        <div 
                          key={icon} 
                          className='border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center bg-black/30 backdrop-blur-sm hover:border-purple/50 transition-colors duration-300' 
                          style={{ transform: `translateX(-${5 * index * 2}px)` }}
                        >
                          <Image src={icon} alt="icon" className='p-2' width={500} height={500} />
                        </div>
                      ))}
                    </div>
                    <div className='flex justify-center items-center group'>
                      <p className='flex lg:text-xl md:text-xs text-sm text-purple group-hover:text-white transition-colors duration-300'>Check Live Site</p>
                      <FaLocationArrow className='ms-3 text-purple group-hover:translate-x-1 transition-all duration-300' />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }