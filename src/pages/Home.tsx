import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader } from "@/components";

const Home = () => {
  /**
   * Page States
   */
  const container_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        type: "tween",
        duration: 1.5, // Only Applied To Tween
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const button_variants = {
    // visible: {
    //   x: [0, -20, 20, -20, 20, 0], // KeyFrames
    //   transition: {
    //     delay: 2,
    //   },
    // },
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        // yoyo: 10, // Repeat For 10 KeyFrames
        yoyo: Infinity, // Never Stops
      },
    },
  };

  return (
    <motion.section
      variants={container_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <h2 className="text-white text-[20px] mb-[1rem]">
        Welcome to Pizza Joint
      </h2>

      <Link to="/base">
        <motion.button
          variants={button_variants}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>

      <Loader />
    </motion.section>
  );
};

export default Home;
