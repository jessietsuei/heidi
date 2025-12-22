import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import BackgroundContainer from '../assets/background-container.svg';
import CardContainer from '../assets/card-container.svg';
import Sparkle from '../assets/sparkle.svg';
import TaskRow from '../assets/task-row.svg';
import TaskRowCompleted from '../assets/task-row-completed.svg';
import TaskRowAnimated from './TaskRowAnimated';

const TaskCard = () => {
    const [phase, setPhase] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
  
    // Delay start of animation
    useEffect(() => {
      const startDelay = setTimeout(() => {
        setHasStarted(true);
      }, 400);
      
      return () => clearTimeout(startDelay);
    }, []);

    const phaseTiming = [
      250,   // 0 → 1: Row 1 appears
      250,   // 1 → 2: Row 2 appears
      250,   // 2 → 3: Row 3 appears
      600,   // 3 → 4: Pause, then rearrange ← Let it settle
      400,   // 4 → 5: Complete first
      450,   // 5 → 6: Move down + fade
      400,   // 6 → 7: Complete second
      450,   // 7 → 8: Move down + fade
      400,   // 8 → 9: Complete third
      450,   // 9 → 10: Move down + fade
      700,   // 10 → 0: Pause, then loop ← Moment of rest before restart
    ];

 // Phase progression
 useEffect(() => {
    if (!hasStarted) return;
    
    const timer = setTimeout(() => {
      setPhase(prev => (prev + 1) % 11);
    }, phaseTiming[phase]);
    return () => clearTimeout(timer);
  }, [phase, hasStarted]);

  const getRowConfig = () => {
    switch (phase) {
      case -1:
        // Not started - all hidden
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false, visible: false },
          { id: 2, position: 1, isCompleted: false, fadeOut: false, visible: false },
          { id: 3, position: 2, isCompleted: false, fadeOut: false, visible: false },
        ];

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

  const rowPositions = ['20%', '42%', '64%'];
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
          top: '22%', 
          left: '12%', 
          width: '76%'
        }} 
      />
      
      {/* Rows container - clipped to card area */}
      <div style={{
        position: 'absolute',
        top: '22%',
        left: '12%',
        width: '76%',
        height: '45%',
        overflow: 'hidden',
        borderRadius: '16px',
      }}>
        {rows.map((row, index) => (
  <motion.div
    key={row.id}
    initial={{ opacity: 0, x: 100 + (index * 20) }}  // ← Add initial state
    animate={{ 
      top: rowPositions[row.position],
      opacity: hasStarted && row.visible ? (row.fadeOut ? 0 : 1) : 0,  // ← Check hasStarted
      x: hasStarted && row.visible ? 0 : 100 + (index * 20),  // ← Check hasStarted
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
            <div style={{ width: '85%' }}>

            {row.isCompleted ? (
  <motion.img 
    src={TaskRowCompleted} 
    alt=""
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94], 
    }}
    style={{ width: '100%' }}
  />
) : (
  <TaskRowAnimated id={row.id} />
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