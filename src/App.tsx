import { useState } from "react";
import styles from "./App.module.css";
import {
  AppBackground,
  TaskList,
  TaskModal,
  AddTaskButton,
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

  return (
    <AppBackground>
      <TaskList />
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
