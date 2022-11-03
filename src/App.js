import TodoList from "./TodoList";
import Header from "./Header";

function App() {

  return (
    <div className="App">
      {/* Header (title) */}
      <Header />

      {/* List + add item function */}
      <TodoList />

    </div>
  );
}

export default App;
