// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFilter,
//   faSort,
//   faSearch,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";

// type Properties = {
// //   onFilter: (status: string, priority: string) => void;
// //   onSearch: (searchText: string) => void;
// };

// const Header: React.FC<Properties> = ({
// //   onFilter,

// //   onSearch,
// }) => {
//   const [statusFilter, setStatusFilter] = useState("");
//   const [priorityFilter, setPriorityFilter] = useState("");
//   const [searchText, setSearchText] = useState("");

// //   const handleFilter = () => {
// //     onFilter(statusFilter, priorityFilter);
// //   };

// //   const handleSearch = () => {
// //     onSearch(searchText);
// //   };

//   return (
//     <div className={styles["header-container"]}>

//       <div className={styles["search-container"]}>
//         <input
//           type="text"
//           placeholder="Search by Title"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button>
//         {/* <button onClick={handleSearch}> */}
//           <FontAwesomeIcon icon={faSearch} />
//         </button>
//         <button onClick={() => setSearchText("")}>
//           <FontAwesomeIcon icon={faTimes} />
//         </button>
//       </div>
//       <div className={styles["filter-container"]}>
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//         >
//           <option value="">Filter by Status</option>
//           <option value="ToDo">To Do</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Done">Done</option>
//         </select>
//         <select
//           value={priorityFilter}
//           onChange={(e) => setPriorityFilter(e.target.value)}
//         >
//           <option value="">Filter by Priority</option>
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//         </select>

//       </div>
//     </div>
//   );
// };

// export { Header };
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
  }, [filters]);

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
    <div    className={styles["header-container"]}>
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
          <select
            name="priority"
            onChange={handlePriorityChange}
          >
       <option value="">Filter by Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          </select>
        </label>
        <label className={styles["filter-container"]}>
          <select name="status" onChange={handleStatusChange}>
            <option value="">Filter by Status</option>
            <option value="ToDo">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
      </form>



    </div>
  );
};

export { Header };

// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFilter,
//   faSort,
//   faSearch,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";

// type Properties = {
//   onFilter: (status: string, priority: string) => void;
//   onSearch: (searchText: string) => void;
// };

// const Header: React.FC<Properties> = ({
//   onFilter,
//   onSearch,
// }) => {
//   const [statusFilter, setStatusFilter] = useState("");
//   const [priorityFilter, setPriorityFilter] = useState("");
//   const [searchText, setSearchText] = useState("");

//   const handleFilter = () => {
//     onFilter(statusFilter, priorityFilter);
//   };

//   const handleSearch = () => {
//     onSearch(searchText);
//   };

//   return (
//     <div className={styles["header-container"]}>
//       <div className={styles["search-container"]}>
//         <input
//           type="text"
//           placeholder="Search by Title"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button onClick={handleSearch}>
//           <FontAwesomeIcon icon={faSearch} />
//         </button>
//         <button onClick={() => setSearchText("")}>
//           <FontAwesomeIcon icon={faTimes} />
//         </button>
//       </div>
//       <div className={styles["filter-container"]}>
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//         >
//           <option value="">Filter by Status</option>
//           <option value="ToDo">To Do</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Done">Done</option>
//         </select>
//         <select
//           value={priorityFilter}
//           onChange={(e) => setPriorityFilter(e.target.value)}
//         >
//           <option value="">Filter by Priority</option>
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//         </select>
//         <button onClick={handleFilter}>
//           <FontAwesomeIcon icon={faFilter} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export { Header };
