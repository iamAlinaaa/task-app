import React from "react";
import { useSelector } from "react-redux";
import { TaskItem } from "../components";
import type { Task } from "../../slices/task-slice";

const TaskList: React.FC = () => {
  const { allTasks } = useSelector(({ tasks }) => {
    return {
      allTasks: tasks.tasks,
    };
  });

  return (
    <div>
      {allTasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export { TaskList };
