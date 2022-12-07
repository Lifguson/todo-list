import TaskList from "./TaskList";
import { } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const App = () => {

  const [taskList, setTaskList] = useState([]);

  return (
      <div className="content">
        <TaskList taskList={taskList} setTaskList={setTaskList} />
      </div>
  );
}

export default App;