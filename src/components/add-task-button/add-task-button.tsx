import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

type AddTaskButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
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
