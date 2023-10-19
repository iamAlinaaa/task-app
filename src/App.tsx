import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBackground,
  TaskList,
  TaskModal,
  AddTaskButton,
  Header,
} from "./components/components";
import { actions } from "./slices/task-slice";

function App() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewTask = () => {
    dispatch(actions.setSelectedTask(null));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditTask = () => {
    setIsModalOpen(true);
  };

  const { allTasks } = useSelector(({ tasks }) => {
    return {
      allTasks: tasks.tasks,
    };
  });

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    dispatch(actions.loadTasks(storedTasks));
  }, [dispatch]);

  const [filteredTasks, setFilteredTasks] = useState(allTasks);

  return (
    <AppBackground>
      <Header tasksData={allTasks} setFilteredTasks={setFilteredTasks} />
        <TaskList tasksData={filteredTasks} onEditTask={handleEditTask} />
      <div className={styles["bottom-button-container"]}>
        <AddTaskButton onClick={addNewTask} />
      </div>
      {isModalOpen && <TaskModal isOpen={isModalOpen} onClose={closeModal} />}
    </AppBackground>
  );
}

export default App;
