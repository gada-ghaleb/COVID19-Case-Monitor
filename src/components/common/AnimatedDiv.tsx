import React from "react";
import { motion } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  hoverEffect?: boolean; 
  className?: string; 
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  hoverEffect = false,
  className = "",
}) => {
 
  const animationText = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={animationText}
      initial="hidden"
      whileInView="show"
      whileHover={hoverEffect ? { scale: 1.1 } : undefined} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
