import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, handleDelete, completed, handleComplete }) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: completed ? "green" : "black" }}
    >
      <li key={task.id}>
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
