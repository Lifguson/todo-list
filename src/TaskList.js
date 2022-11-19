import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
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
              {" "}
              {task.value}
              <DropdownMenu />
              <FontAwesomeIcon
                icon={faTrashCan}
                className="delete-icon"
                onClick={() => handleDelete(task.id)}
              />
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
