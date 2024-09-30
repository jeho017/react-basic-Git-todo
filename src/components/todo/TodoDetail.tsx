import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { getTodoDetail } from "../../api/todoClient";
import { useTodoDetailQuery } from "../../hooks/useTodoQuery";

interface TodoDetailProps {
  id: string;
}

const TodoDetail = ({ id }: TodoDetailProps) => {
  const { data: todo, isLoading, error } = useTodoDetailQuery(id);

  if (isLoading) {
    return <section>로딩중...</section>;
  }

  if (error) {
    return <section>Error: {error.message}</section>;
  }

  if (!todo) {
    return <section>404 NOT Found Todo</section>;
  }

  return (
    <section>
      <TodoItem todo={todo} />
    </section>
  );
};

export default TodoDetail;
