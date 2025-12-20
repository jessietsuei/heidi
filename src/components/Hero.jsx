import React from 'react';
import TaskCard from './TaskCard';  

const Hero = () => {
  return (
    <section className="w-full px-12 py-12">
      <div className="bg-heidi-background rounded-3xl px-16 py-2">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-4">
            {/* Section Title */}
            <div className="text-base font-semibold text-heidi-text">
              Tasks
            </div>

            {/* Main Title */}
            <h1 className="font-exposure text-[56px] leading-[1em] tracking-[-0.05em] text-heidi-text font-normal">
            Tasks that put care first
            </h1>

            {/* Description */}
            <p className="text-base leading-[1.4em] tracking-[-0.03em] text-heidi-text">
              Heidi automatically turns follow-ups into tasks, so you can focus
              on patients — not on scribbled stickies.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="flex items-center gap-2 px-5 py-[10px] rounded-lg bg-heidi-accent text-heidi-surface text-base font-medium hover:bg-[#2B6433] transition-colors">
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