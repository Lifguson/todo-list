import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // function to add items to list
  const addItem = () => {
    if (!newItem) {
      alert("Enter an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [item, ...oldList]);
    setNewItem("");
  };

  // function to delete items from list
  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  return (
    <div className="todo-list">
      <div className="input">
        <input
          type="text"
          required
          value={newItem}
          placeholder="What do you need to do?"
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button className="add-button" onClick={() => addItem()}>
          Add
        </button>
      </div>

      <div className="list">
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}{" "}
                <FontAwesomeIcon icon={faCircleXmark}  className="delete-icon" onClick={() => deleteItem(item.id)} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
