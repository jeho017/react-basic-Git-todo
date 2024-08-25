import React, { useState } from "react";
import { SAMPLE_TODOS } from "../../constants/sample-todos";
import TodoForm from "./TodoForm";

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
      <TodoForm addTodos={addTodos} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text} -{" "}
              {todo.completed ? <span>완료됨</span> : <span>미완료</span>}
            </p>
            <button onClick={() => toggleCompleted(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
