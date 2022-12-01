import React from "react";
import { motion, useCycle } from "framer-motion";
import { reverse } from "dns/promises";

const Loader = () => {
  /**
   * Component States
   */
  const [animation, cycleAnimation] = useCycle(
    "loader_wrapper_animation_one",
    "loader_wrapper_animation_two"
  );
  const loader_variants = {
    loader_wrapper_animation_one: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5,
        },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.25,
          ease: "easeOut",
        },
      },
    },
    loader_wrapper_animation_two: {
      x: 0,
      y: [0, -40],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
          duration: 0.25,
        },
      },
    },
  };
  return (
    <>
      <motion.div
        variants={loader_variants}
        animate={animation}
        className="w-[10px] h-[10px] my-[40px] mx-auto rounded-full bg-white"
      />

      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};

export default Loader;
