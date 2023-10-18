import React from "react";
import type { Task } from "../../slices/task-slice";
import { useDispatch } from "react-redux";
import { actions } from "../../slices/task-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

type TaskItemProps = {
  task: Task;
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(actions.removeTask(task.id));
  };

  const handleToggleStatus = () => {
    dispatch(actions.toggleTaskStatus(task.id));
  };

  return (
    <div className={styles["task-item"]}>
      <h3>{task.title !== "" ? task.title : "Add your title"}</h3>
      <p>
        {task.description !== "" ? task.description : "Add your description"}
      </p>
      <p>{task.priority} Priority</p>
      <p>{task.status}</p>
      <div onClick={handleToggleStatus}>
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <div onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};

export { TaskItem };
