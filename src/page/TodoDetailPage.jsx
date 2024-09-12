import React from "react";
import TodoDetail from "../components/todo/TodoDetail";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const TodoDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <TodoDetail id={id} />

      <Link to="/">
        <ToListButton>목록으로</ToListButton>
      </Link>
    </div>
  );
};

export default TodoDetailPage;

const ToListButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #582be7;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
`;
