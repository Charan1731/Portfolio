import React from "react";
import { BallCanvas } from "@/components/canvas";
import { SectionWrapper } from "@/components/hoc";
import { technologies } from "@/data";
import { TextHighlight } from "@/components/ui/text-highlight";

const Tech = () => {
  return (
    <div id="skills">
      <h1 className='heading text-center mb-10'>
        <TextHighlight 
          highlightColor="#CBACF9" 
          highlightHeight={12} 
          highlightOffset={-2}
          autoAnimate={true}
        >
          <span className="section-title-badge">EXPERTISE</span>
            <h1 className='heading'>
                Technical {' '}
                <span className='gradient-text'>Skills</span>
            </h1>
        </TextHighlight>
      </h1>
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