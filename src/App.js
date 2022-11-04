import TodoList from "./TodoList";
import Header from "./Header";

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
