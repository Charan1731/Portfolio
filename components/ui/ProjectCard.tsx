import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';

interface ProjectCardProps {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({  title, des, img, iconLists, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative max-w-sm rounded-xl border border-white/10 overflow-hidden bg-black-100 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20"
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors">
              <FaLocationArrow size={24} />
            </div>
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{des}</p>
        <div className="flex items-center gap-4">
          {iconLists.map((icon, index) => (
            <div key={index} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <Image src={icon} alt="icon" width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
