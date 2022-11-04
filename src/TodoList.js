import { useState } from "react";

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
            value: newItem
        }

        setItems(oldList => [item, ...oldList]);
        setNewItem("");
    } 

    // function to delete items from list
    const deleteItem = (id) => {
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    return (

        <div className="todo-list">
            <input
                type="text"
                required
                value={newItem}
                placeholder="What do you need to do?"
                onChange={(e) => setNewItem(e.target.value)}
            />

            <button className="add-button" onClick={() => addItem()}>Add</button>

            <ul>
                {items.map(item => {
                    return(
                        <li key={item.id}>{item.value} <button className="delete-button" onClick={() => deleteItem(item.id)}>Delete</button></li>
                    )
                })}
            </ul>
        </div>

    )

}

export default TodoList;