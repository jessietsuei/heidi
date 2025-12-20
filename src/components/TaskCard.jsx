import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import BackgroundContainer from '../assets/background-container.svg';
import CardContainer from '../assets/card-container.svg';
import Sparkle from '../assets/sparkle.svg';
import TaskRow from '../assets/task-row.svg';
import TaskRowCompleted from '../assets/task-row-completed.svg';

const TaskCard = () => {
  const [phase, setPhase] = useState(0);

  const phaseTiming = [
    250,   // 0 → 1: Row 1 appears
    250,   // 1 → 2: Row 2 appears
    250,   // 2 → 3: Row 3 appears
    500,   // 3 → 4: Pause, then rearrange
    400,   // 4 → 5: Complete first
    500,   // 5 → 6: Move down + fade
    500,   // 6 → 7: Complete second
    400,   // 7 → 8: Move down + fade
    500,   // 8 → 9: Complete third
    500,   // 9 → 10: Move down + fade
    800,   // 10 → 0: Pause, then loop
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase(prev => (prev + 1) % 11);
    }, phaseTiming[phase]);
    return () => clearTimeout(timer);
  }, [phase]);

  const getRowConfig = () => {
    switch (phase) {
      case 0:
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false, visible: true },
          { id: 2, position: 1, isCompleted: false, fadeOut: false, visible: false },
          { id: 3, position: 2, isCompleted: false, fadeOut: false, visible: false },
        ];
      case 1:
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false, visible: true },
          { id: 2, position: 1, isCompleted: false, fadeOut: false, visible: true },
          { id: 3, position: 2, isCompleted: false, fadeOut: false, visible: false },
        ];
      case 2:
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false, visible: true },
          { id: 2, position: 1, isCompleted: false, fadeOut: false, visible: true },
          { id: 3, position: 2, isCompleted: false, fadeOut: false, visible: true },
        ];
      case 3:
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false, visible: true },
          { id: 2, position: 1, isCompleted: false, fadeOut: false, visible: true },
          { id: 3, position: 2, isCompleted: false, fadeOut: false, visible: true },
        ];
      case 4:
        return [
          { id: 3, position: 0, isCompleted: false, fadeOut: false, visible: true },
          { id: 1, position: 1, isCompleted: false, fadeOut: false, visible: true },
          { id: 2, position: 2, isCompleted: false, fadeOut: false, visible: true },
        ];
      case 5:
        return [
          { id: 3, position: 0, isCompleted: true, fadeOut: false, visible: true },
          { id: 1, position: 1, isCompleted: false, fadeOut: false, visible: true },
          { id: 2, position: 2, isCompleted: false, fadeOut: false, visible: true },
        ];
      case 6:
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false, visible: true },
          { id: 2, position: 1, isCompleted: false, fadeOut: false, visible: true },
          { id: 3, position: 2, isCompleted: true, fadeOut: true, visible: true },
        ];
      case 7:
        return [
          { id: 1, position: 0, isCompleted: true, fadeOut: false, visible: true },
          { id: 2, position: 1, isCompleted: false, fadeOut: false, visible: true },
          { id: 3, position: 2, isCompleted: true, fadeOut: true, visible: true },
        ];
      case 8:
        return [
          { id: 2, position: 0, isCompleted: false, fadeOut: false, visible: true },
          { id: 1, position: 1, isCompleted: true, fadeOut: true, visible: true },
          { id: 3, position: 2, isCompleted: true, fadeOut: true, visible: true },
        ];
      case 9:
        return [
          { id: 2, position: 0, isCompleted: true, fadeOut: false, visible: true },
          { id: 1, position: 1, isCompleted: true, fadeOut: true, visible: true },
          { id: 3, position: 2, isCompleted: true, fadeOut: true, visible: true },
        ];
      case 10:
      default:
        return [
          { id: 2, position: 2, isCompleted: true, fadeOut: true, visible: true },
          { id: 1, position: 1, isCompleted: true, fadeOut: true, visible: true },
          { id: 3, position: 2, isCompleted: true, fadeOut: true, visible: true },
        ];
    }
  };

  const rowPositions = ['18%', '40%', '62%'];
  const rows = getRowConfig();

  // Track which rows have been shown (for intro animation)
  const getSlideOffset = (row, index) => {
    if (!row.visible) {
      return 100 + (index * 20); // Start off-screen right
    }
    return 0; // Settled position
  };

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%',
      aspectRatio: '1',
    }}>
      <img 
        src={BackgroundContainer} 
        alt="" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%',
          height: '100%'
        }} 
      />
      <img 
        src={CardContainer} 
        alt="" 
        style={{ 
          position: 'absolute', 
          top: '20%', 
          left: '8%', 
          width: '84%'
        }} 
      />
      
      {/* Rows container - clipped to card area */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '8%',
        width: '84%',
        height: '50%',
        overflow: 'hidden',
        borderRadius: '16px',
      }}>
        {rows.map((row, index) => (
          <motion.div
            key={row.id}
            animate={{ 
              top: rowPositions[row.position],
              opacity: row.visible ? (row.fadeOut ? 0 : 1) : 0,
              x: getSlideOffset(row, index),
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ 
              position: 'absolute', 
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '90%' }}>
              {row.isCompleted ? (
                <motion.img 
                  src={TaskRowCompleted} 
                  alt=""
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    duration: 0.3
                  }}
                  style={{ width: '100%' }}
                />
              ) : (
                <img 
                  src={TaskRow} 
                  alt=""
                  style={{ width: '100%' }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.img 
        src={Sparkle} 
        alt="" 
        style={{ 
          position: 'absolute', 
          bottom: '18%',
          left: '48%', 
          transform: 'translateX(-48%)',
          width: '32px'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default TaskCard;