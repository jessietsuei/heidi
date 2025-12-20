import { motion } from 'framer-motion';

const TaskRowAnimated = ({ style, id = 1 }) => {
  const gradientId = `shimmerGradient-${id}`;
  const shadowId = `shadow-${id}`;
  
  return (
    <motion.svg 
      width="100%" 
      height="auto" 
      viewBox="0 0 377 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', ...style }}
    >
      <defs>
        <filter id={shadowId} x="0" y="0" width="377" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="4"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.0117647 0 0 0 0 0.0627451 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        
        {/* Animated gradient - sweeps left to right */}
        <motion.linearGradient 
  id={gradientId}
  gradientUnits="userSpaceOnUse"
  animate={{
    x1: [-100, 400],
    x2: [100, 800],
  }}
  transition={{
    duration: 1.8,
    repeat: Infinity,
    ease: "easeInOut",
    delay: id * 0.2,        // Row 1: 0.3s, Row 2: 0.6s, Row 3: 0.9s
  }}
>
  <stop offset="0" stopColor="#280310" stopOpacity="0.4"/>
  <stop offset="0.5" stopColor="#280310" stopOpacity="1"/>
  <stop offset="1" stopColor="#280310" stopOpacity="0.4"/>
</motion.linearGradient>

        {/* Static base gradient for the lines */}
        <linearGradient 
          id={`baseGradient-${id}`}
          x1="44"
          y1="0"
          x2="357"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#280310" stopOpacity="0.4"/>
          <stop offset="0.6" stopColor="#280310" stopOpacity="0.15"/>
          <stop offset="1" stopColor="#280310" stopOpacity="0"/>
        </linearGradient>
      </defs>
      
      <g filter={`url(#${shadowId})`}>
        {/* Card background */}
        <path d="M8 16C8 9.37258 13.3726 4 20 4H357C363.627 4 369 9.37258 369 16V36C369 42.6274 363.627 48 357 48H20C13.3726 48 8 42.6274 8 36V16Z" fill="white"/>
        
        {/* Checkbox - empty circle */}
        <circle cx="28" cy="26" r="7.5" stroke="#280310" fill="none"/>
        
        {/* Line 1 - base gradient + shimmer overlay */}
        <rect x="44" y="16" width="313" height="8" rx="4" fill={`url(#baseGradient-${id})`}/>
        <rect x="44" y="16" width="313" height="8" rx="4" fill={`url(#${gradientId})`}/>
        
        {/* Line 2 - base gradient + shimmer overlay */}
        <rect x="44" y="28" width="313" height="8" rx="4" fill={`url(#baseGradient-${id})`}/>
        <rect x="44" y="28" width="313" height="8" rx="4" fill={`url(#${gradientId})`}/>
      </g>
    </motion.svg>
  );
};

export default TaskRowAnimated;