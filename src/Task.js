import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Task = ({ task, taskList, setTaskList, setText, text }) => {

const [edit, setEdit] = useState({
  id: null,
  value: ''
});
  
  const updateTask = (taskId, newValue) => {
    if (!newValue.text) {
      return;
    } else {
      setTaskList(prev => prev.map(item => (item.id === taskId ? newValue : item)))
    }
  };

  const handleEdit = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
      };

    const handleComplete = (id) => {
        setTaskList(taskList.map((task) => {
            if (task.id === id) {
                return { ...task, complete: !task.complete };
            } else {
                return task;
            }
        }))
    };

  return (
    <div
      className="task"
      style={{ borderColor: task.complete ? "green" : "white", color: task.complete ? "green" : "white", textDecoration: task.complete ? "line-through" : "none"  }}
    >
      <li key={task.id} value={task.text} type="text"
      style={{ color: task.complete ? "green" : "white" }}
      onInput={handleEdit}
      >
        {task.text}
        {console.log(task)}
        </li>
        
        <div className="task-buttons">
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-button"
          />
          <FontAwesomeIcon
            icon={faCheck}
            className="complete-button"
            onClick={() => handleComplete(task.id)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="delete-button"
            onClick={() => handleDelete(task.id)}
          />
        </div>
    </div>
  );
};

export default Task;
