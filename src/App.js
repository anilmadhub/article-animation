import React, { useState } from "react";
import "./styles.css";
import { motion } from "framer-motion";

export default function App() {
  const [yValue, setYvalue] = useState(10);
  const slide = value => setYvalue(value);

  return (
    <>
      <input type="range" onChange={e => slide(e.target.value)} />
      {yValue}
      <motion.div className="App" animate={{ y: `${yValue}px` }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </motion.div>
    </>
  );
}
