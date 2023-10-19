import React from "react";
import type { Task } from "../../slices/task-slice";
import { useDispatch } from "react-redux";
import { actions } from "../../slices/task-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

type Properties = {
  task: Task;
  onEditTask: () => void;
};

const TaskItem: React.FC<Properties> = ({ task, onEditTask }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(actions.removeTask(task.id));
  };

  const handleToggleStatus = () => {
    dispatch(actions.toggleTaskStatus(task.id));
  };

  const handleEditTask = () => {
    dispatch(actions.setSelectedTask(task));
    onEditTask();
  };

  return (
    <li className={styles["task-item"]}>
      <h3>{task.title !== "" ? task.title : "Add your title"}</h3>
      <p className={styles["description"]}>
        {task.description !== "" ? task.description : "Add your description"}
      </p>
      <div className={styles["priority-status-container"]}>
        <p
          className={
            styles[
              `${
                task.priority === "High"
                  ? "high-todo"
                  : task.priority === "Medium"
                  ? "medium-progress"
                  : "low-done"
              }`
            ]
          }
        >
          {task.priority}
        </p>
        <p
          className={
            styles[
              `${
                task.status === "To Do"
                  ? "high-todo"
                  : task.status === "In Progress"
                  ? "medium-progress"
                  : "low-done"
              }`
            ]
          }
        >
          {task.status}
        </p>
      </div>
      <div className={styles["icon-container"]}>
        <button className={styles["button"]} onClick={handleEditTask}>
          <FontAwesomeIcon icon={faPenToSquare} fontSize={16} />
        </button>
        {task.status !== "Done" && (
          <button className={styles["button"]} onClick={handleToggleStatus}>
            <FontAwesomeIcon icon={faCheck} fontSize={16} />
          </button>
        )}
        <button className={styles["button"]} onClick={handleRemoveTask}>
          <FontAwesomeIcon icon={faTrashCan} fontSize={16} />
        </button>
      </div>
    </li>
  );
};

export { TaskItem };
