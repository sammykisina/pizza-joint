import { AppRoutes } from "@/routes";
import { Modal, TopNavbar } from "@/components";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const App = () => {
  /**
   * Component States
   */
  const [show_modal, setShowModal] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <section>
        {/* The TopNavbar */}
        <div>
          <TopNavbar />
        </div>

        {/* The Rest Of The App */}
        <div>
          <AppRoutes setShowModal={setShowModal} />
        </div>

        <Modal show_modal={show_modal} setShowModal={setShowModal} />
      </section>
    </BrowserRouter>
  );
};

export default App;
