import { useEffect } from "react";
import TodoDetails from "../components/TodoDetails";
import TodoForm from "../components/TodoForm";
import { useTodosContext } from "../hooks/useTodosContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { todos, dispatch } = useTodosContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      // for production, you need to make sure every fetch request points to the correct endpoint (we are using proxy here to get around the CORS issue during development)
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: json });
      }
    };

    if (user) {
      fetchTodos();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="todos">
        {todos &&
          todos.map((todo) => <TodoDetails key={todo._id} todo={todo} />)}
      </div>
      <TodoForm />
    </div>
  );
};

export default Home;
