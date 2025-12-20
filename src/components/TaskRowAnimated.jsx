import { motion } from 'framer-motion';

const TaskRowAnimated = ({ isCompleted = false, style }) => {
  return (
    <motion.svg 
      width="377" 
      height="60" 
      viewBox="0 0 377 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <defs>
        <filter id="shadow" x="0" y="0" width="377" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="4"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.0117647 0 0 0 0 0.0627451 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        
        {/* Animated gradient */}
        <motion.linearGradient 
          id="shimmerGradient"
          gradientUnits="userSpaceOnUse"
          animate={{
            x1: [44, 200, 44],
            x2: [200, 357, 200],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <stop stopColor="#280310" stopOpacity="0.3"/>
          <stop offset="0.5" stopColor="#280310" stopOpacity="0.8"/>
          <stop offset="1" stopColor="#280310" stopOpacity="0.3"/>
        </motion.linearGradient>
      </defs>
      
      <g filter="url(#shadow)">
        {/* Card background */}
        <path d="M8 16C8 9.37258 13.3726 4 20 4H357C363.627 4 369 9.37258 369 16V36C369 42.6274 363.627 48 357 48H20C13.3726 48 8 42.6274 8 36V16Z" fill="white"/>
        
        {/* Checkbox - empty circle or checkmark */}
        {isCompleted ? (
          <g>
            <circle cx="28" cy="26" r="8" fill="#22C55E"/>
            <path d="M24 26L27 29L32 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        ) : (
          <circle cx="28" cy="26" r="7.5" stroke="#280310" fill="none"/>
        )}
        
        {/* Lines with shimmer */}
        <rect x="44" y="16" width="313" height="8" rx="4" fill="url(#shimmerGradient)"/>
        <rect x="44" y="28" width="200" height="8" rx="4" fill="url(#shimmerGradient)"/>
      </g>
    </motion.svg>
  );
};

export default TaskRowAnimated;