import { useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return handleError();
    } else {

    const task = {
      id: Math.floor(Math.random() * 1000),
      value: text,
      complete: false
    };

    setTasks([task, ...tasks]);
    setText("");
  }};

  const handleError = () => {
    if (!text) {
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
          value={text}
          placeholder="What needs to be done?"
          onChange={(e) => setText(e.target.value)}
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
