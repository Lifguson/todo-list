import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Task = ({
  task,
  taskList,
  setTaskList,
  setText,
  text,
  enterEditMode,
  isEditing,
}) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleComplete = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, complete: !task.complete };
        } else {
          return task;
        }
      })
    );
  };

  const borderColors = {
    complete: "green",
    editing: "orange",
  };

  return (
    <div
      className="task"
      style={{
        borderColor: task.complete ? "green" : "white",
        color: task.complete ? "green" : "white",
        textDecoration: task.complete ? "line-through" : "none",
      }}
    >
      <li
        key={task.id}
        value={task.text}
        type="text"
        style={{ color: task.complete ? "green" : "white" }}
      >
        {task.text}
        {console.log(task)}
      </li>

      <div className="task-buttons">
        <motion.div
          style={{ backgroundColor: "transparent" }}
          whileHover={{ scale: 1.3 }}
        >
          <FontAwesomeIcon
            icon={faEdit}
            className="edit-button"
            onClick={() => enterEditMode(task)}
            aria-label={`Update ${task.text} Task`}
          />
        </motion.div>
        <motion.div
          style={{ backgroundColor: "transparent" }}
          whileHover={{ scale: 1.3 }}
        >
          <FontAwesomeIcon
            icon={faCheck}
            className="complete-button"
            onClick={() => handleComplete(task.id)}
          />
        </motion.div>
        <motion.div
          style={{ backgroundColor: "transparent" }}
          whileHover={{ scale: 1.3 }}
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            className="delete-button"
            onClick={() => handleDelete(task.id)}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Task;
