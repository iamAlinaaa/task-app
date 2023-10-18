// import React, { useState } from "react";

// type Properties = {
//   id: number;
//   title: string;
//   description: string;
//   priority: "high" | "medium" | "low";
//   status: "completed" | "not completed" | "in progress";
//   onDelete: (id: number) => void;
//   onEdit: (id: number, updatedTask: Task) => void;
// };

// type Task = {
//   title: string;
//   description: string;
//   priority: "high" | "medium" | "low";
//   status: "completed" | "not completed" | "in progress";
// };

// const TaskItem: React.FC<Properties> = ({
//   id,
//   title,
//   description,
//   priority,
//   status,
//   onDelete,
//   onEdit,
// }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTask, setEditedTask] = useState<Task>({
//     title,
//     description,
//     priority,
//     status,
//   });

//   const handleDelete = () => {
//     onDelete(id);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     onEdit(id, editedTask);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedTask({ title, description, priority, status });
//   };

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = event.target;
//     setEditedTask({ ...editedTask, [name]: value });
//   };

//   return (
//     <div className="task-item">
//       {isEditing ? (
//         <div className="task-edit">
//           <input
//             type="text"
//             name="title"
//             value={editedTask.title}
//             onChange={handleInputChange}
//           />
//           <input
//             type="text"
//             name="description"
//             value={editedTask.description}
//             onChange={handleInputChange}
//           />
//           <select
//             name="priority"
//             value={editedTask.priority}
//             onChange={handleInputChange}
//           >
//             <option value="high">High</option>
//             <option value="medium">Medium</option>
//             <option value="low">Low</option>
//           </select>
//           <select
//             name="status"
//             value={editedTask.status}
//             onChange={handleInputChange}
//           >
//             <option value="completed">Completed</option>
//             <option value="not completed">Not Completed</option>
//             <option value="in progress">In Progress</option>
//           </select>
//           <button onClick={handleSave}>Save</button>
//           <button onClick={handleCancel}>Cancel</button>
//         </div>
//       ) : (
//         <div className="task-details">
//           <h3>{title}</h3>
//           <p>{description}</p>
//           <div className={`priority ${priority}`}>{priority}</div>
//           <div className={`status ${status}`}>{status}</div>
//         </div>
//       )}
//       <div className="task-actions">
//         <button onClick={handleEdit}>Edit</button>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export { TaskItem };

// TaskItem.tsx
import React from "react";
import type { Task } from "../../slices/task-slice";
import { useDispatch } from "react-redux";
import { actions } from "../../slices/task-slice";

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
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleToggleStatus}>Toggle Status</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export { TaskItem };
