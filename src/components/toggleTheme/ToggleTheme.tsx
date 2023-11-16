"use client";

import Image from "next/image";
import styles from "./toggleTheme.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <div className={styles.container} onClick={toggleTheme} style={
      theme === "dark"
        ? { backgroundColor: "white" }
        : { backgroundColor: "#0f1721" }
    }>
      <Image src="/moon.png" alt="moon" height={15} width={15} />
      <div className={styles.ball} style={
        theme === "dark"
          ? { left: 2, background: "#0f1721" }
          : { right: 2, background: "white" }
      } />
      <Image src="/sun.png" alt="sun" height={15} width={15} />
    </div>
  );
};
export default ToggleTheme;
