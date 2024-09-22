import { ClipboardCheck, Ellipsis, Monitor, Video } from "lucide-react";

import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../api/todoClient";
import { useTodoQuery } from "../../hooks/useTodoQuery";
import { useGetFilter } from "../../hooks/useGetFilter";

const TodoDashboard = () => {
  const { filter } = useGetFilter();

  // const { data: allTodos } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: () => getTodos(),
  // });

  // const { data: completedTodos } = useQuery({
  //   queryKey: ["todos", "completed"],
  //   queryFn: () => getTodos("completed"),
  // });

  // const { data: pendingTodos } = useQuery({
  //   queryKey: ["todos", "pending"],
  //   queryFn: () => getTodos("pending"),
  // });

  const { data: allTodos } = useTodoQuery();
  const { data: completedTodos } = useTodoQuery("completed");
  const { data: pendingTodos } = useTodoQuery("pending");

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="flex flex-row gap-2 w-full">
        <Link
          to={"/"}
          className={`dashboard-card bg-[#e7582b] flex-grow-[2] ${
            !filter ? "underline" : ""
          }`}
        >
          <div className="flex flex-row justify-between">
            <ClipboardCheck />
            <Ellipsis />
          </div>
          <p>
            {allTodos?.length} <br /> All Task
          </p>
        </Link>
        <Link
          to={"?filter=completed"}
          className={`dashboard-card bg-[#582be7] flex-grow ${
            filter === "completed" ? "underline" : ""
          }`}
        >
          <div className="flex flex-row justify-between">
            <Monitor />
            <Ellipsis />
          </div>
          <p>
            {completedTodos?.length} <br /> Completed
          </p>
        </Link>
        <Link
          to={"?filter=pending"}
          className={`dashboard-card bg-[#242424] flex-grow ${
            filter === "pending" ? "underline" : ""
          }`}
        >
          <div className="flex flex-row justify-between">
            <Video />
            <Ellipsis />
          </div>
          <p>
            {pendingTodos?.length} <br /> Pending
          </p>
        </Link>
      </div>
    </section>
  );
};

export default TodoDashboard;
