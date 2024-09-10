import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoClient } from "../api/todoClient";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const fetchTodos = async () => {
    const { data } = await todoClient.get("/");

    setTodos(data);
  };

  const addTodos = async (newTodoObj) => {
    await todoClient.post("/", newTodoObj);

    fetchTodos();
  };

  const toggleCompleted = async (id, completed) => {
    await todoClient.patch(`/${id}`, { completed });

    fetchTodos();
  };

  // const toggleCompleted = (id) =>
  //   setTodos((prevTodos) =>
  //   prevTodos.map((todo) =>
  //   todo.id === id ? {...todo, completed: !todo.completed} : todo
  //   )
  //   );

  const handleDelete = async (id) => {
    await todoClient.delete(`/${id}`);

    fetchTodos();

    setTodos(filteredTodos);
    navigate("/");
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <TodoContext.Provider
      value={{
        todos,
        fetchTodos,
        addTodos,
        toggleCompleted,
        handleDelete,
        completedTodos,
        pendingTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
