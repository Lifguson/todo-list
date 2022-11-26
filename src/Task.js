import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, taskList, setTaskList }) => {

    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
      };

  return (
    <div
      className="task"
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
