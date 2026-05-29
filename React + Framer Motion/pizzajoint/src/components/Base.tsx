import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface BaseProps {
  addBase: any;
  pizza: any;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.2,
    },
  },
};

const Base: React.FC<BaseProps> = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // initial={{ x: "100vw" }}
      // animate={{ x: 0 }}
      // transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#f8e118",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <Link to="/toppings">
            <motion.button
              animate={{}}
              whileHover={{
                fontWeight: "bolder",
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
