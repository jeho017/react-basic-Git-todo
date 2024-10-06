import TodoForm from "@/components/todos/TodoForm";
import TodoList from "@/components/todos/TodoList";
import React from "react";

const RootPage = () => {
  return (
    <main>
      <TodoForm />
      <TodoList />
    </main>
  );
};

export default RootPage;
