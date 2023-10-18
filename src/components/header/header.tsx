import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Task } from "../../slices/task-slice";

type Properties = {
  tasksData: Task[];
  setFilteredTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

type FilterState = {
  searchQuery: string;
  priorityFilter: string;
  statusFilter: string;
};

const Header: React.FC<Properties> = ({ tasksData, setFilteredTasks }) => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    priorityFilter: "",
    statusFilter: "",
  });

  useEffect(() => {
    applyFilters();
  }, [filters, tasksData]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchQuery: event.target.value,
    }));
  };

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priorityFilter: event.target.value,
    }));
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      statusFilter: event.target.value,
    }));
  };

  const applyFilters = () => {
    const { searchQuery, priorityFilter, statusFilter } = filters;

    const filteredTasks = tasksData.filter((task) => {
      const matchSearch =
        task?.title?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
      const matchPriority =
        priorityFilter === "" || task.priority === priorityFilter;
      const matchStatus = statusFilter === "" || task.status === statusFilter;
      return matchSearch && matchPriority && matchStatus;
    });

    setFilteredTasks(filteredTasks);
  };

  return (
    <div className={styles["header-container"]}>
      <form autoComplete="off">
        <label className={styles["search-container"]}>
          <input
            name="search"
            type="search"
            placeholder="Search by Title"
            onChange={handleSearchChange}
          />
        </label>
        <label className={styles["filter-container"]}>
          <select name="priority" onChange={handlePriorityChange}>
            <option value="">Filter by Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label className={styles["filter-container"]}>
          <select name="status" onChange={handleStatusChange}>
            <option value="">Filter by Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export { Header };
