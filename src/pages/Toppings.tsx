import { toppings } from "@/constants";
import { Pizza } from "@/typings.t";
import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ToppingProps {
  addTopping: (new_topping: string) => void;
  pizza: Pizza;
}

const Toppings: FC<ToppingProps> = ({ addTopping, pizza }) => {
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

  const button_variants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.section
      variants={container_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="toppings container text-white"
    >
      <h3>Step 2: Choose Toppings</h3>

      <ul>
        {toppings.map((topping, topping_index) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";

          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              key={topping_index}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={button_variants}
          whileHover="hover"
          className="mt-10"
        >
          Order
        </motion.button>
      </Link>
    </motion.section>
  );
};

export default Toppings;
