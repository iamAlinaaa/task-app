import React from "react";
import { TaskItem } from "../components";
import type { Task } from "../../slices/task-slice";

import styles from "./styles.module.css";

type Properties = {
  tasksData: Task[];
};

const TaskList: React.FC<Properties> = ({ tasksData }) => {
  return (
    <div className={styles["task-list-container"]}>
      {tasksData.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export { TaskList };
