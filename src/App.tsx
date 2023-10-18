import { useState } from "react";
import styles from "./App.module.css";
import { useSelector } from "react-redux";
import {
  AppBackground,
  TaskList,
  TaskModal,
  AddTaskButton,
  Header,
} from "./components/components";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveNewTask = () => {
    console.log("SAVED");
  };

  const { allTasks } = useSelector(({ tasks }) => {
    return {
      allTasks: tasks.tasks,
    };
  });

  const [filteredTasks, setFilteredTasks] = useState(allTasks);

  return (
    <AppBackground>
      <Header tasksData={allTasks} setFilteredTasks={setFilteredTasks} />
      <div className={styles["tasks-container"]}>
        <TaskList tasksData={filteredTasks}/>
      </div>
      <div className={styles["bottom-button-container"]}>
        <AddTaskButton onClick={openModal} />
      </div>
      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSaveNewTask}
        />
      )}
    </AppBackground>
  );
}

export default App;
