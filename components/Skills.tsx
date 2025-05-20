import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';

const Skills = () => {
    const languages = [
      {
        id:1,
        name: "C lang",
        designation: "Programming Language",
        image: "c.png",
      },
      {
        id:2,
        name: "Java Lang",
        designation: "Programming Language",
        image: "java.png",
      },
      {
        id:3,
        name: "Python",
        designation: "Programming Language",
        image: "python.png",
      },
      {
        id:4,
        name: "TypeScript",
        designation: "Programming Language",
        image: "typescript.png",
      },
      {
        id:5,
        name: "JavaScript",
        designation: "Programming Language",
        image: "javascript.png",
      },
      {
        id:6,
        name: "Solidity",
        designation: "Programming Language",
        image: "solidity.png",
      },
      {
        id:7,
        name: "HTML",
        designation: "Web Technology",
        image: "html.png",
      },
      {
        id:8,
        name: "CSS",
        designation: "Web Technology",
        image: "css.png",
      },
      {
        id:9,
        name: "React.JS",
        designation: "Web Technology",
        image: "reactjs.png",
      },
      {
        id:10,
        name: "Node.JS",
        designation: "Web Technology",
        image: "nodejs.png",
      },
      {
        id:11,
        name: "Tailwind CSS",
        designation: "Web Technology",
        image: "tailwind.png",
      },
      {
        id:14,
        name: "Git",
        designation: "Developer Tools",
        image: "git.png",
      },
      {
        id:15,
        name: "Docker",
        designation: "Developer Tools",
        image: "docker.png",
      },
      {
        id:16,
        name: "Kubernetes",
        designation: "Developer Tools",
        image: "kubernetes.png",
      },
      {
        id:17,
        name: "Github",
        designation: "Developer Tools",
        image: "git.svg",
      },
      {
        id:18,
        name: "MongoDB",
        designation: "Database",
        image: "mongodb.png",
      },
      {
        id:19,
        name: "FireBase",
        designation: "Database",
        image: "firebase.png",
      },
      {
        id:20,
        name: "MySQL",
        designation: "Database",
        image: "mysql.png",
      },
    ];
  return (
    <div className='section-padding relative' id='skill'>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10">
            <span className="section-title-badge">EXPERTISE</span>
            <h1 className='heading'>
                Technical {' '}
                <span className='gradient-text'>Skills</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-gray-400">Technologies and programming languages I work with</p>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-24 mt-16 relative z-10'>
            <AnimatedTooltip items={languages} />
        </div>
    </div>
  )
}

export default Skills