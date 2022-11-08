import TodoList from "./TodoList";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="content">
        {/* List + add and delete functions */}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
