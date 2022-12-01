import { AnimatePresence, motion } from "framer-motion";
import { FC, Dispatch } from "react";
import { Link } from "react-router-dom";

interface ModalProps {
  show_modal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ show_modal, setShowModal }) => {
  /**
   * Component States
   */
  const backdrop_variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal_variants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "200px",
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {show_modal && (
        <motion.div
          variants={backdrop_variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50"
        >
          <motion.div
            variants={modal_variants}
            className="max-w-[400px] my-0 mx-auto py-[40px] px-[20px] bg-white rounded-[10px] text-center"
          >
            <p className="text-[#444] font-bold ">
              Want to make another pizza?
            </p>
            <Link to="/">
              <button className="text-[#444] border border-[#444] font-bold mt-[20px]">
                Start Again
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
