import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu";

const TaskList = ({ tasks, setTasks, completed }) => {
  const [complete, setComplete] = useState(false);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  
  return (
    <div className="task-list">
      {tasks.map((task) => {
        return (
          <div className="task" style={{ backgroundColor: completed ? "green" : "black" }}>
            <li key={task.id}>
              {task.value}
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

          {/* <Task 
            task={task}
            tasks={tasks}
            key={task.id}
            text={task.value}
            setTasks={setTasks}
            completed={task.completed}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          /> */}
            
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
