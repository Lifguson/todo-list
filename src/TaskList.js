import { useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";

const TaskList = ({ taskList, setTaskList }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  
  const task = {
    id: Math.floor(Math.random() * 1000),
    text,
    complete: false
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return handleError();
    } else {

    

    setTaskList([...taskList, task]);
    setText("");
  }};

  const updateTask = (taskId, newValue) => {
    if (!newValue) {
      return handleError();
    } else {
      setTaskList([...taskList, { ...task, text: newValue }])
    }
  }

  const handleError = () => {
    if (!text) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };




  return (
    <>
    <AddTask text={text} setText={setText} error={error} handleSubmit={handleSubmit} />
    <div className="task-list">
      {taskList.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            text={task.text}
            setTaskList={setTaskList}
            taskList={taskList}
            updateTask={updateTask}
            setText={setText}
          />
        );
      })}
    </div>
    </>
  );
};

export default TaskList;
