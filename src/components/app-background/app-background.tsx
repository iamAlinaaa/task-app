import React from "react";
import styles from "./styles.module.css";

type Properties = {
  children: React.ReactNode;
};
const AppBackground: React.FC<Properties> = ({ children }) => {
  return <div className={styles["background"]}> {children}</div>;
};

export { AppBackground };
