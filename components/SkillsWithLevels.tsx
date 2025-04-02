"use client";

import React, { useState } from 'react';
import { AnimatedSkillBar } from './ui/animated-skill-bar';
import { TextScramble } from './ui/text-scramble';
import { motion } from 'framer-motion';

const SkillsWithLevels = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'language', name: 'Languages' },
    { id: 'web', name: 'Web Tech' },
    { id: 'tools', name: 'Dev Tools' },
    { id: 'database', name: 'Databases' },
  ];
  
  const skillLevels = [
    {
      id: 1,
      name: "TypeScript",
      level: 90,
      image: "typescript.png",
      category: "language",
    },
    {
      id: 2,
      name: "JavaScript",
      level: 95,
      image: "javascript.png",
      category: "language",
    },
    {
      id: 3,
      name: "Python",
      level: 85,
      image: "python.png",
      category: "language",
    },
    {
      id: 4,
      name: "Java",
      level: 75,
      image: "java.png",
      category: "language",
    },
    {
      id: 5,
      name: "C",
      level: 80,
      image: "c.png",
      category: "language",
    },
    {
      id: 6,
      name: "Solidity",
      level: 65,
      image: "solidity.png",
      category: "language",
    },
    {
      id: 7,
      name: "React.js",
      level: 95,
      image: "reactjs.png",
      category: "web",
    },
    {
      id: 8,
      name: "Next.js",
      level: 90,
      image: "next.svg",
      category: "web",
    },
    {
      id: 9,
      name: "HTML5",
      level: 98,
      image: "html.png",
      category: "web",
    },
    {
      id: 10,
      name: "CSS3",
      level: 92,
      image: "css.png",
      category: "web",
    },
    {
      id: 11,
      name: "Tailwind CSS",
      level: 95,
      image: "tailwind.png",
      category: "web",
    },
    {
      id: 12,
      name: "Node.js",
      level: 85,
      image: "nodejs.png",
      category: "web",
    },
    {
      id: 13,
      name: "Git",
      level: 88,
      image: "git.png",
      category: "tools",
    },
    {
      id: 14,
      name: "Docker",
      level: 75,
      image: "docker.png",
      category: "tools",
    },
    {
      id: 15,
      name: "Kubernetes",
      level: 65,
      image: "kubernetes.png",
      category: "tools",
    },
    {
      id: 16,
      name: "GitHub",
      level: 90,
      image: "git.svg",
      category: "tools",
    },
    {
      id: 17,
      name: "MongoDB",
      level: 85,
      image: "mongodb.png",
      category: "database",
    },
    {
      id: 18,
      name: "Firebase",
      level: 80,
      image: "firebase.png",
      category: "database",
    },
    {
      id: 19,
      name: "MySQL",
      level: 82,
      image: "mysql.png",
      category: "database",
    },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skillLevels 
    : skillLevels.filter(skill => skill.category === activeCategory);
  
  return (
    <div className='section-padding relative' id='skills-levels'>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
      <div className="text-center mb-16 relative z-10">
        <span className="section-title-badge">PROFICIENCY</span>
        <h1 className='heading'>
          <TextScramble text="Skill" scrambleOnMount={true} /> {' '}
          <span className='gradient-text'>Proficiency</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
          A detailed look at my technical skills and expertise levels
        </p>
      </div>
      
      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {skillCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-purple text-white'
                : 'bg-black-200/30 text-gray-400 hover:bg-black-200/50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredSkills.map(skill => (
          <AnimatedSkillBar
            key={skill.id}
            name={skill.name}
            level={skill.level}
            image={skill.image}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsWithLevels; 