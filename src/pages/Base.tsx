import { bases } from "@/constants";
import { Pizza } from "@/typings.t";
import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface BaseProps {
  addBase: (base: string) => void;
  pizza: Pizza;
}

const Base: FC<BaseProps> = ({ addBase, pizza }) => {
  /**
   * Page States
   */
  const container_variants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay: 0.5 },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const next_button_wrapper_variants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const button_variants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        // repeat: Infinity,
        // repeatType: "reverse",
      },
    },
  };

  return (
    <motion.section
      variants={container_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base container text-white"
    >
      <h3>Step 1: Choose Your Base</h3>

      <ul>
        {bases.map((base, base_index) => {
          let spanClass = pizza.base === base ? "active" : "";

          return (
            <motion.li
              key={base_index}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div variants={next_button_wrapper_variants} className="mt-10">
          <Link to="/toppings">
            <motion.button variants={button_variants} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Base;
