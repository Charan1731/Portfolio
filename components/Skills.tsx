import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';

const Skills = () => {
    const people = [
        {
          id: 1,
          name: "HTML",
          designation: "Web Dev",
          image:
            "html.png",
        },
        {
          id: 2,
          name: "CSS",
          designation: "Web Dev",
          image:
            "css.png",
        },
        {
          id: 3,
          name: "JavaScript",
          designation: "Web Dev",
          image:
            "javascript.png",
        },
        {
          id: 4,
          name: "TypeScript",
          designation: "Web Dev",
          image:
            "typescript.png",
        },
        {
          id: 5,
          name: "Tailwind CSS",
          designation: "Web Dev",
          image:
            "tailwind.png",
        },
        {
          id: 6,
          name: "Git",
          designation: "Developer Tools",
          image:
            "git.png",
        },
        {
            id: 7,
            name: "Figma",
            designation: "Developer Tools",
            image:
              "figma.png",
          },
          {
            id: 8,
            name: "ReactJS",
            designation: "Web Dev",
            image:
              "reactjs.png",
          },
          {
            id: 9,
            name: "MongoDB",
            designation: "DataBase",
            image:
              "mongodb.png",
          },
          {
            id: 10,
            name: "NodeJS",
            designation: "Web Dev",
            image:
              "nodejs.png",
          },
          {
            id: 11,
            name: "Solidity",
            designation: "WEB 3.0",
            image:
              "solidity.png",
          },
          {
            id: 12,
            name: "Kubernetes",
            designation: "Devloper Tools",
            image:
              "kubernetes.png",
          },
          {
            id: 13,
            name: "Docker",
            designation: "Developer Tools",
            image:
              "docker.png",
          },
          {
            id: 14,
            name: "Python",
            designation: "Language",
            image:
              "python-removebg.png",
          },
          {
            id: 15,
            name: "Java",
            designation: "Language",
            image:
              "java.png",
          },
      ];
  return (
    <div className='py-20' id='skills'>
        <h1 className='heading'>
            My Techincal {' '}
            <span className='text-purple'>Skills</span>
        </h1>
        <h3 className='heading mt-10'>Programming <span className='text-purple'>Languages</span></h3>
        <div className='flex flex-row flex-wrap justify-center gap-24 mt-10'>
            <AnimatedTooltip items={people} />
        </div>
        <h3 className='heading mt-10'>Programming <span className='text-purple'>Languages</span></h3>
    </div>
  )
}

export default Skills