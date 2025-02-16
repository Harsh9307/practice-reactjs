import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    // Load from localStorage when component mounts
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getFilteredTodos = () => {
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    if (filter === "pending") return todos.filter((todo) => !todo.completed);
    return todos;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold text-center mb-4">Todo List</h1>

      {/* Todo Input Form */}
      <TodoForm addTodo={addTodo} />

      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 my-4">
        <button 
          className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button 
          className={`px-3 py-1 rounded ${filter === "completed" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button 
          className={`px-3 py-1 rounded ${filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      {/* Display Todos */}
      <ul className="mt-4">
        {getFilteredTodos().length === 0 && (
          <p className="text-gray-500 text-center">No tasks found!</p>
        )}
        {getFilteredTodos().map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
