import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Task = ({ task, taskList, setTaskList, updateTask, setText, text }) => {

const [edit, setEdit] = useState({
  id: null,
  value: ''
});

  const handleEdit = (id, value) => {
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
      <div key={task.id} value={text} type="text"
      style={{ color: task.complete ? "green" : "white" }}
      contentEditable="true"
      onInput={handleEdit}
      >
        {text}
        {console.log(task)}
        </div>
        
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
