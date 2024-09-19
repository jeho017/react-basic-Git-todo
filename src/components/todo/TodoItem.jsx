import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "../../hooks/useTodoMutation";

const TodoItem = ({ todo }) => {
  const navigate = useNavigate();

  const { mutateAsync: handleDelete, isPending } = useDeleteTodoMutation();
  const { mutate: handleToggle } = useToggleTodoMutation();

  return (
    <TaskItem key={todo.id}>
      <TaskItemContent>
        <p
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          <Link to={`/${todo.id}`}>{todo.text}</Link> -{" "}
          {todo.completed ? <span>완료됨</span> : <span>미완료</span>}
        </p>
      </TaskItemContent>
      <TaskItemActions>
        <TaskItemActionButton
          onClick={() =>
            handleToggle({ id: todo.id, completed: !todo.completed })
          }
          color="#582be7"
        >
          {todo.completed ? "취소" : "완료"}
        </TaskItemActionButton>
        <TaskItemActionButton
          onClick={async () => {
            await handleDelete(todo.id);
            navigate("/");
          }}
          color="#f05656"
        >
          삭제
        </TaskItemActionButton>
      </TaskItemActions>
    </TaskItem>
  );
};

export default TodoItem;

const TaskItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
`;

const TaskItemContent = styled.div``;

const TaskItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const TaskItemActionButton = styled.button`
  color: #ffffff; //text 컬러
  background-color: ${({ color }) => color};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;
