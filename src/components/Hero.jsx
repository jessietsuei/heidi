import React from 'react';
import { motion } from 'framer-motion';
import TaskCard from './TaskCard';
import H1 from '../assets/H1.svg';

const Hero = () => {
  const textReveal = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay,
      }
    })
  };

  return (
    <section className="w-full px-12 py-12">
      <div className="bg-heidi-background rounded-3xl px-16 py-2">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-4">
            {/* Section Title / Tag */}
            <motion.div 
              className="font-system text-base font-semibold text-heidi-text"
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Tasks
            </motion.div>

            {/* Main Title */}
            <motion.img 
              src={H1} 
              alt="Tasks that put care first" 
              className="w-[90%] h-auto"
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={0.15}
            />

            {/* Description */}
            <motion.p 
              className="font-inter text-base font-normal leading-[1.4em] text-heidi-text"
              variants={textReveal}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              Heidi automatically turns follow-ups into tasks, so you can focus
              on patients — not on scribbled stickies.
            </motion.p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="font-system flex items-center gap-2 px-5 py-[10px] rounded-lg bg-heidi-accent text-heidi-surface text-base font-medium hover:bg-[#2B6433] transition-colors">
                <span>Try it now</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-heidi-surface"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Animated Illustration */}
          <div className="flex items-center justify-center">
            <TaskCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;