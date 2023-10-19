import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "../../slices/task-slice";
import { useDispatch } from "react-redux";
import { actions } from "../../slices/task-slice";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";

type Properties = {
  isOpen: boolean;
  onClose: () => void;
};

const TaskModal: React.FC<Properties> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { taskToEdit } = useSelector(({ tasks }) => {
    return {
      taskToEdit: tasks.taskToEdit,
    };
  });
  console.log(taskToEdit);

  const [newTask, setNewTask] = useState<Task>(
    taskToEdit
      ? { ...taskToEdit }
      : {
          id: uuidv4(),
          title: "",
          description: "",
          priority: "Low",
          status: "To Do",
        }
  );

  const handleSave = () => {
    taskToEdit
      ? dispatch(actions.updateTask(newTask))
      : dispatch(actions.addTask(newTask));
    onClose();
  };

  return isOpen ? (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["input-container"]}>
          <input
            className={styles["input"]}
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <textarea
            className={styles["input"]}
            rows={7}
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
        </div>
        <div className={styles["priority-status-container"]}>
          <label>Priority:</label>
          <div className={styles["priority-status-buttons"]}>
            <button
              className={`${styles["priority-status-button"]} ${
                newTask.priority === "High" ? styles["high-todo"] : ""
              }`}
              onClick={() => setNewTask({ ...newTask, priority: "High" })}
            >
              High
            </button>
            <button
              className={`${styles["priority-status-button"]} ${
                newTask.priority === "Medium" ? styles["medium-progress"] : ""
              }`}
              onClick={() => setNewTask({ ...newTask, priority: "Medium" })}
            >
              Medium
            </button>
            <button
              className={`${styles["priority-status-button"]} ${
                newTask.priority === "Low" ? styles["low-done"] : ""
              }`}
              onClick={() => setNewTask({ ...newTask, priority: "Low" })}
            >
              Low
            </button>
          </div>
        </div>
        <div className={styles["priority-status-container"]}>
          <label>Status:</label>
          <div className={styles["priority-status-buttons"]}>
            <button
              className={`${styles["priority-status-button"]} ${
                newTask.status === "To Do" ? styles["high-todo"] : ""
              }`}
              onClick={() => setNewTask({ ...newTask, status: "To Do" })}
            >
              To Do
            </button>
            <button
              className={`${styles["priority-status-button"]} ${
                newTask.status === "In Progress"
                  ? styles["medium-progress"]
                  : ""
              }`}
              onClick={() => setNewTask({ ...newTask, status: "In Progress" })}
            >
              In Progress
            </button>
            <button
              className={`${styles["priority-status-button"]} ${
                newTask.status === "Done" ? styles["low-done"] : ""
              }`}
              onClick={() => setNewTask({ ...newTask, status: "Done" })}
            >
              Done
            </button>
          </div>
        </div>
        <button className={styles["button"]} onClick={handleSave}>
          <FontAwesomeIcon icon={faCheck} fontSize={24} />
        </button>
        <button className={styles["button"]} onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} fontSize={24} />
        </button>
      </div>
    </div>
  ) : null;
};

export { TaskModal };
