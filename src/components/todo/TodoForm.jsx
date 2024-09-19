import { useState } from "react";
import styled from "styled-components";
import { TaskItemActionButton } from "./TodoItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTodo } from "../../api/todoClient";
import { useCreateTodoMutation } from "../../hooks/useTodoMutation";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { mutate } = useCreateTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    const newTodoObj = {
      // id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };

    // setTodos([newTodoObj, ...todos]);
    // addTodos(newTodoObj);
    mutate(newTodoObj);
    setNewTodo("");
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <TaskForm onSubmit={handleSubmit}>
      <TaskInput
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <TaskButton type="submit" color="#582be7">
        추가하기
      </TaskButton>
    </TaskForm>
  );
};

export default TodoForm;

const TaskForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const TaskInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  color: #333333;
  background-color: #ffffff;
  transition: border-color 0.3s;

  &:focus {
    border-color: #582be7;
  }
`;

const TaskButton = styled(TaskItemActionButton)``;
