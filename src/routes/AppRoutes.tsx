import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTE_PATHS } from "@/constants";
import { Home, Base, Toppings, Order, Notfound } from "@/pages";
import { useState, Dispatch, FC } from "react";
import { Pizza } from "@/typings.t";
import { AnimatePresence } from "framer-motion";

interface AppRoutesPros {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

const AppRoutes: FC<AppRoutesPros> = ({ setShowModal }) => {
  /**
   * Component States
   */
  const location = useLocation();
  const [pizza, setPizza] = useState<Pizza>({ base: "", toppings: [] });

  /**
   * Component Functions
   */
  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (new_topping: string) => {
    let new_toppings;
    if (!pizza.toppings.includes(new_topping)) {
      new_toppings = [...pizza.toppings, new_topping];
    } else {
      new_toppings = pizza.toppings.filter(
        (topping) => topping !== new_topping
      );
    }

    setPizza({ ...pizza, toppings: new_toppings });
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
      <Routes location={location} key={location.pathname}>
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route
          path={ROUTE_PATHS.BASE}
          element={<Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path={ROUTE_PATHS.TOPPINGS}
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route
          path={ROUTE_PATHS.ORDER}
          element={<Order pizza={pizza} setShowModal={setShowModal} />}
        />
        <Route path={ROUTE_PATHS.NOTFOUND } element={<Notfound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
