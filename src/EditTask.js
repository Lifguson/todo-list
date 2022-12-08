import { useState, useEffect } from "react";

const EditTask = ({ editedTask, updateTask, closeEditMode, error }) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.text);

    useEffect(() => {
        const closeModalIfEscaped = (e) => {
            e.key === "Escape" && closeEditMode();
        }

        window.addEventListener("keydown", closeModalIfEscaped)

        return () => {
            window.removeEventListener("keydown", closeModalIfEscaped)
        }
    }, [closeEditMode])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, text: updatedTaskName})
    }


    return (
    <div className="edit-input"
        role="dialog"
        aria-labelledby="editTask"
        onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="editTask"
            value={updatedTaskName}
            placeholder="Edit task"
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
          />
          <button className="add-button"
            type="submit"
            aria-label={`confirm edited task to now read ${updatedTaskName}`}
          >
            Update
          </button>
          <p
            style={{
              display: !error ? "none" : "",
              color: "red",
            }}
          >
            Please add a task
          </p>
        </form>
      </div>

    )
}

export default EditTask;