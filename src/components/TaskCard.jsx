import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TaskRowAnimated from './TaskRowAnimated';

import BackgroundContainer from '../assets/background-container.svg';
import CardContainer from '../assets/card-container.svg';
import Sparkle from '../assets/sparkle.svg';
import TaskRowCompleted from '../assets/task-row-completed.svg';

const TaskCard = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase(prev => (prev + 1) % 8);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const getRowConfig = () => {
    switch (phase) {
      case 0:
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false },
          { id: 2, position: 1, isCompleted: false, fadeOut: false },
          { id: 3, position: 2, isCompleted: false, fadeOut: false },
        ];
      case 1:
        return [
          { id: 3, position: 0, isCompleted: false, fadeOut: false },
          { id: 1, position: 1, isCompleted: false, fadeOut: false },
          { id: 2, position: 2, isCompleted: false, fadeOut: false },
        ];
      case 2:
        return [
          { id: 3, position: 0, isCompleted: true, fadeOut: false },
          { id: 1, position: 1, isCompleted: false, fadeOut: false },
          { id: 2, position: 2, isCompleted: false, fadeOut: false },
        ];
      case 3:
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false },
          { id: 2, position: 1, isCompleted: false, fadeOut: false },
          { id: 3, position: 2, isCompleted: true, fadeOut: true },
        ];
      case 4:
        return [
          { id: 2, position: 0, isCompleted: false, fadeOut: false },
          { id: 1, position: 1, isCompleted: false, fadeOut: false },
          { id: 3, position: 2, isCompleted: true, fadeOut: true },
        ];
      case 5:
        return [
          { id: 2, position: 0, isCompleted: true, fadeOut: false },
          { id: 1, position: 1, isCompleted: false, fadeOut: false },
          { id: 3, position: 2, isCompleted: true, fadeOut: true },
        ];
      case 6:
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false },
          { id: 3, position: 1, isCompleted: true, fadeOut: true },
          { id: 2, position: 2, isCompleted: true, fadeOut: true },
        ];
      case 7:
      default:
        return [
          { id: 1, position: 0, isCompleted: false, fadeOut: false },
          { id: 2, position: 1, isCompleted: false, fadeOut: false },
          { id: 3, position: 2, isCompleted: false, fadeOut: false },
        ];
    }
  };

  const rowPositions = ['20%', '40%', '60%'];
  const rows = getRowConfig();

  return (
    <div style={{ 
      position: 'relative', 
      width: '500px', 
      height: '500px',
    }}>
      <img src={BackgroundContainer} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%' }} />
      <img src={CardContainer} alt="" style={{ position: 'absolute', top: '10%', left: '10%', width: '80%' }} />
      
      {rows.map((row) => (
        <motion.div
          key={row.id}
          animate={{ 
            top: rowPositions[row.position],
            opacity: row.fadeOut ? 0 : 1
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1]
          }}
          style={{ position: 'absolute', left: '15%', width: '70%' }}
        >
          {row.isCompleted ? (
            <motion.img 
              src={TaskRowCompleted} 
              alt=""
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ width: '100%' }}
            />
          ) : (
            <TaskRowAnimated isCompleted={false} />
          )}
        </motion.div>
      ))}
      
      <motion.img 
        src={Sparkle} 
        alt="" 
        style={{ 
          position: 'absolute', 
          bottom: '5%', 
          left: '50%', 
          width: '40px' 
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default TaskCard;