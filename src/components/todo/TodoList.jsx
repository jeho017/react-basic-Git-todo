import TodoItem from "./TodoItem";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../api/todoClient";
import { useTodoFilteredQuery, useTodoQuery } from "../../hooks/useTodoQuery";

const TodoList = () => {
  const { data, isLoading, error } = useTodoFilteredQuery();

  if (isLoading) {
    return <section className="flex flex-col gap-4">로딩중...</section>;
  }

  if (error) {
    return (
      <section className="flex flex-col gap-4">Error: {error.message}</section>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold">Tasks</h1>
      </div>
      <ul className="flex flex-col gap-4">
        {data.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
