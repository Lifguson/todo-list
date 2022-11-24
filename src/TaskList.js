import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";

const TaskList = ({ tasks, setTasks }) => {
  const [complete, setComplete] = useState(false);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleComplete = () => {
    setComplete(!complete);
  };
  
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return (
          <div className="task">
            <li key={task.id}>
              <div className={complete ? "completed-task" : ""}>{task.value}</div>
              {/* <DropdownMenu /> */}
              <div className="task-buttons">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="edit-button"
                  // onClick={() => handleEdit(task)} 
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
            </li>

            {/* {showEdit === item.id ? (
            <div className="edit">
              <form onSubmit={addItem}>
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
              <button onClick={() => editItem(item.id, updatedText)}>
                Update
              </button>
              </form>
            </div>
          ) : null} */}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
