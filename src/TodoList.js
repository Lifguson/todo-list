import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  const[error, setError] = useState(false);

  const handleError = () => {
    if (!newItem) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
  }
};

  // handleSubmit
  const addItem = (e) => {
    e.preventDefault();

    if (!newItem) {
      return handleError();
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [item, ...oldList]);
    setNewItem("");

    // console.log(items)
  };
  

  // for deleting items from list
  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };

  // for editing items in the list
  const editItem = (id, newText) => {
    if (!newText) {
      return handleError();
    };

    const currentItem = items.filter((item) => item.id === id);

    const newItem = {
      id: currentItem.id,
      value: newText,
    };
    
    deleteItem(id);

    setItems((oldList) => [newItem, ...oldList]);
    setUpdatedText("");
    setShowEdit();
  }

  return (
    <div className="todo-list">
      <div className="input">
        <form onSubmit={addItem}>
        <input
          type="text"
          required
          value={newItem}
          placeholder="What needs to be done?"
          onChange={(e) => setNewItem(e.target.value)}
        />
        
        <FontAwesomeIcon icon={faPlus} className="add-icon" onClick={() => addItem()} />
        </form>
      </div>

      <div className="list">
          {items.map((item) => {
            return (
              <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
                <FontAwesomeIcon icon={faXmark}  className="delete-icon" onClick={() => deleteItem(item.id)} />
              </li>
          
          {showEdit === item.id ? (
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
          ) : null}
          </div>
            );
          })}
      </div>
    </div>
  );
}

export default TodoList;
