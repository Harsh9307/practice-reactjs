const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
    return (
      <li className="flex justify-between items-center bg-gray-200 p-2 rounded my-2">
        <span
          className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
        <button
          className="bg-white-500 text-white px-2 rounded"
          onClick={() => removeTodo(todo.id)}
        >
          ❌
        </button>
      </li>
    );
  };
  
  export default TodoItem;
  