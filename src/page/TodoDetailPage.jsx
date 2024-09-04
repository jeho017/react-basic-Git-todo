import React from "react";
import TodoDetail from "../components/todo/TodoDetail";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TodoDetailPage = () => {
  return (
    <div>
      <TodoDetail />

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
