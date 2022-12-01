import { motion } from "framer-motion";

const TopNavbar = () => {
  /**
   * Component States
   */
  const svg_variants = {
    initial: { rotate: -180 },
    animate: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const path_variants = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },

    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <motion.svg
          variants={svg_variants}
          initial="initial"
          animate="animate"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={path_variants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={path_variants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>

      {/* title */}
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="title"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default TopNavbar;
