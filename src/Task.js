import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, taskList, setTaskList }) => {

    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
      };

    const handleComplete = (id) => {
        setTaskList(taskList.map((task) => {
            if (task.id === id) {
                return { ...task, completed: true };
            } else {
                return task;
            }
        }))
    };

  return (
    <div
      className="task"
    >
      <li key={task.id}
      style={{ borderColor: task.completed ? "green" : "white", color: task.completed ? "green" : "white", textDecoration: task.completed ? "line-through" : "none"  }}
      >
        {task.taskName}
        <div className="task-buttons">
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-button"
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
    </div>
  );
};

export default Task;
