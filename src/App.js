import TaskList from "./TaskList";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddTask from "./AddTask";


const App = () => {

  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="content">
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
