import { useState } from "react";

const AddTask = ({ taskList, setTaskList }) => {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask) {
      return handleError();
    } else {

    const task = {
      id: Math.floor(Math.random() * 1000),
      taskName: newTask,
      complete: false
    };

    setTaskList([task, ...taskList]);
    setNewTask("");
  }};

  const handleError = () => {
    if (!newTask) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          placeholder="What needs to be done?"
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button className="add-button" onClick={() => handleSubmit()}>
          Add
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
  );
};
export default AddTask;
