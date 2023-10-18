import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

type Properties = {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  onSave: (task: Task) => void;
};

type Task = {
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  status: "toDo" | "inProgress" | "done";
};

const TaskModal: React.FC<Properties> = ({ isOpen, onClose, onSave }) => {
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    description: "",
    priority: "low",
    status: "toDo",
  });

  const handleSave = () => {
    onSave(newTask);
  };

  return isOpen ? (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["column-container"]}>
          <div className={styles["input-container"]}>
            <input
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
          </div>
          <div className={styles["input-container"]}>
            <textarea
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
                  newTask.priority === "high" ? styles["high-todo"] : ""
                }`}
                onClick={() => setNewTask({ ...newTask, priority: "high" })}
              >
                High
              </button>
              <button
                className={`${styles["priority-status-button"]} ${
                  newTask.priority === "medium" ? styles["medium-progress"] : ""
                }`}
                onClick={() => setNewTask({ ...newTask, priority: "medium" })}
              >
                Medium
              </button>
              <button
                className={`${styles["priority-status-button"]} ${
                  newTask.priority === "low" ? styles["low-done"] : ""
                }`}
                onClick={() => setNewTask({ ...newTask, priority: "low" })}
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
                  newTask.status === "toDo" ? styles["high-todo"] : ""
                }`}
                onClick={() => setNewTask({ ...newTask, status: "toDo" })}
              >
                To Do
              </button>
              <button
                className={`${styles["priority-status-button"]} ${
                  newTask.status === "inProgress"
                    ? styles["medium-progress"]
                    : ""
                }`}
                onClick={() => setNewTask({ ...newTask, status: "inProgress" })}
              >
                In Progress
              </button>
              <button
                className={`${styles["priority-status-button"]} ${
                  newTask.status === "done" ? styles["low-done"] : ""
                }`}
                onClick={() => setNewTask({ ...newTask, status: "done" })}
              >
                Done
              </button>
            </div>
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
