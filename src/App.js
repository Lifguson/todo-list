import TaskList from "./TaskList";
import { } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddTask from "./AddTask";


const App = () => {

  const [taskList, setTaskList] = useState([]);

  return (
      <div className="content">
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <TaskList taskList={taskList} setTaskList={setTaskList} />
      </div>
  );
}

export default App;
