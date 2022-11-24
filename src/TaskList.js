import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";

const TaskList = ({ tasks, setTasks }) => {
  // const [showEdit, setShowEdit] = useState(-1);
  // const [updatedText, setUpdatedText] = useState("");

  // for deleting items from list
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // for editing items in the list
  // const editItem = (id, newText) => {
  //   if (!newText) {
  //     return handleError();
  //   };

  //   const currentItem = items.filter((item) => item.id === id);

  //   const newItem = {
  //     id: currentItem.id,
  //     value: newText,
  //   };

  //   deleteItem(id);

  //   setItems((oldList) => [newItem, ...oldList]);
  //   setUpdatedText("");
  //   setShowEdit();
  // }

  return (
    <div className="task-list">
      {tasks.map((task) => {
        return (
          <div className="task">
            <li key={task.id}>
              {task.value}
              {/* <DropdownMenu /> */}
              <div className="task-buttons">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="edit-button" 
                />
                <FontAwesomeIcon 
                  icon={faCheck}
                  className="complete-button"
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
