import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

type Properties = {
  onClick: () => void;
};

const AddTaskButton: React.FC<Properties> = ({ onClick }) => {
  return (
    <div className={styles["glass-button-container"]}>
      <button className={styles["glass-button"]} onClick={onClick}>
        <FontAwesomeIcon icon={faPlus} />
        Add New Task
      </button>
    </div>
  );
};

export { AddTaskButton };
