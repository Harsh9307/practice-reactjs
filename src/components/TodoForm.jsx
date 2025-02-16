import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        className="border p-2 flex-grow rounded-l"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
