import React, { useState } from "react";
import { SAMPLE_TODOS } from "../../constants/sample-todos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";

const TodoContainer = () => {
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

  // 삼항 연산자로 최적화 버전 (1)
  // const handleDelete = (id) => {
  //   const filteredTodos = todos.filter((todo) =>
  //     todo.id === id ? false : true
  //   );

  //   setTodos(filteredTodos);
  // };

  // 삼항 연산자로 최적화 버전 (2)
  // const handleDelete = (id) => {
  //   const filteredTodos = todos.filter((todo) => todo.id !== id);

  //   setTodos(filteredTodos);
  // };

  // 삼항 연산자로 최적화 버전 (3)
  // const handleDelete = (id) =>
  //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  return (
    <div>
      <TodoDashboard />
      <TodoForm addTodos={addTodos} />

      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default TodoContainer;
