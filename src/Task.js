import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, taskList, setTaskList }) => {

    const handleDelete = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id));
      };

    const handleComplete = (id) => {
        setTaskList(taskList.map((task) => {
            if (task.id === id) {
                return { ...task, complete: !task.complete };
            } else {
                return task;
            }
        }))
    };

  return (
    <div
      className="task"
      style={{ borderColor: task.complete ? "green" : "white", color: task.complete ? "green" : "white", textDecoration: task.complete ? "line-through" : "none"  }}
    >
      <div key={task.id} value={task.text} type="text"
      style={{ color: task.complete ? "green" : "white" }}
      contentEditable="true"
      >
        {task.text}
        </div>
        
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
    </div>
  );
};

export default Task;
