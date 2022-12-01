import { Pizza } from "@/typings.t";
import { FC, useState, Dispatch, useEffect } from "react";
import { motion } from "framer-motion";

interface OrderProps {
  pizza: Pizza;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

const Order: FC<OrderProps> = ({ pizza, setShowModal }) => {
  /**
   * Page states
   */
  const container_variants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4, // For Hight Mass, The Spiring Movies Slower
        damping: 8, // Strength Of The Opposing Force (Higher Number, Less Oscillation, eg Zero Is A Infinite Oscillation)
        when: "beforeChildren",
        staggerChildren: 0.4, // The Children Will Animate One After The Other Each Taking 0.4 Secs
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const child_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  /**
   * Page Functions
   */
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.section
      variants={container_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container order text-white"
    >
      <h2>Thanks you for you order </h2>

      <motion.p variants={child_variants}>
        You ordered a {pizza.base} with :
      </motion.p>
      <motion.div variants={child_variants}>
        {pizza.toppings.map((topping, topping_index) => (
          <div key={topping_index}>{topping}</div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Order;
