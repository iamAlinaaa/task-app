import { useState } from "react";
import styles from "./App.module.css";
import { AppBackground } from "./components/components";
import { AddTaskButton } from "./components/components";
import { TaskModal } from "./components/components";

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
