import TaskList from "./TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddTask from "./AddTask";


const App = () => {

  const [tasks, setTasks] = useState([]);

  return (
      <div className="content">
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
  );
}

export default App;
