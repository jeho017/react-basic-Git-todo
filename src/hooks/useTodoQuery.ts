import { useQuery } from "@tanstack/react-query";
// import { To, useSearchParams } from "react-router-dom";
import { getTodoDetail, getTodos } from "../api/todoClient";
import { useGetFilter } from "./useGetFilter";
import { Todo, TodoFilter } from "../types/todo.type";

export const useTodoFilteredQuery = () => {
  const { filter } = useGetFilter(); //커스텀 훅 안에서 또 훅으로 사용

  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoQuery = (filter: TodoFilter | null) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoDetailQuery = (id: Todo["id"]) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(id),
  });
};
