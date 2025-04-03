import React from "react";
import { BallCanvas } from "@/components/canvas";
import { SectionWrapper } from "@/components/hoc";
import { technologies } from "@/data";
import { FloatingAnimation } from "./ui/floating-animation";

const Tech = () => {
  return (
    <div id="tech" className="py-16 -mt-20">
      <div className="text-center mb-16">
        <FloatingAnimation yOffset={3} duration={2}>
        <span className="section-title-badge">EXPERTISE</span>
        </FloatingAnimation>
        <h2 className='heading'>
          Technical {' '}
          <span className='gradient-text'>Skills</span>
        </h2>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech"); 