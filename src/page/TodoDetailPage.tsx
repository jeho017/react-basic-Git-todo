import React from "react";
import TodoDetail from "../components/todo/TodoDetail";

import { Link, useParams } from "react-router-dom";

const TodoDetailPage = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div>
        <p>Not Found Todo!</p>
        <button className="mt-4 px-4 py-2 border-none rounded-lg bg-black text-white text-base w-full text-center cursor-pointer hover:opacity-70W">
          목록으로
        </button>
      </div>
    );
  }

  return (
    <div>
      <TodoDetail id={id} />

      <Link to="/">
        <button className="mt-4 px-4 py-2 border-none rounded-lg bg-black text-white text-base w-full text-center cursor-pointer hover:opacity-70W">
          목록으로
        </button>
      </Link>
    </div>
  );
};

export default TodoDetailPage;
