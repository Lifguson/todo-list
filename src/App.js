import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import TaskList from "./TaskList";
import { useState } from "react";
import EditTask from "./EditTask";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

const App = () => {
  const { user } = useAuthContext();

  const [taskList, setTaskList] = useState([]);
  const [error, setError] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const updateTask = (task) => {
    setTaskList((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, text: task.text } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <div className="content">
      {isEditing && (
        <EditTask
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
          error={error}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        error={error}
        setError={setError}
        isEditing={isEditing}
        editedTask={editedTask}
        updateTask={updateTask}
        enterEditMode={enterEditMode}
      />
    </div>
  );
};

export default App;
