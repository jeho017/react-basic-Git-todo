import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getTodoDetail, getTodos } from "../api/todoClient";
import { useGetFilter } from "./useGetFilter";

export const useTodoFilteredQuery = () => {
  const { filter } = useGetFilter(); //커스텀 훅 안에서 또 훅으로 사용

  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoQuery = (filter) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useTodoDetailQuery = (id) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoDetail(id),
  });
};
