import { useState } from "react";

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { postTodo } from "../../api/todoClient";
import { useCreateTodoMutation } from "../../hooks/useTodoMutation";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");
  const { mutate } = useCreateTodoMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    const newTodoObj = {
      // id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };

    // setTodos([newTodoObj, ...todos]);
    // addTodos(newTodoObj);
    mutate(newTodoObj);
    setNewTodo("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-4">
      <input
        className="flex-1 p-2 border-2 border-black rounded-lg outline-none text-base text-[#333333] bg-white transition-colors focus:border-[#582be7]"
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button
        type="submit"
        className="text-white bg-[#582be7] py-2 px-4 rounded-lg cursor-pointer hover:opacity-80"
      >
        추가하기
      </button>
    </form>
  );
};

export default TodoForm;
