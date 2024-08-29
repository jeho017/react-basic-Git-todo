import React, { createContext, useState } from "react";
import { SAMPLE_TODOS } from "../constants/sample-todos";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (newTodoObj) => setTodos([newTodoObj, ...todos]);

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          completed: !todo.completed,
        };

        return newTodo;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  // const toggleCompleted = (id) =>
  //   setTodos((prevTodos) =>
  //   prevTodos.map((todo) =>
  //   todo.id === id ? {...todo, completed: !todo.completed} : todo
  //   )
  //   );

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }
      // 그게 아니면
      return true;
    });

    setTodos(filteredTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodos, toggleCompleted, handleDelete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
