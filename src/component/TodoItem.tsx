interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="peer relative appearance-none 
                          w-5 h-5 border mr-2 
                          rounded-full border-gray-400
                          cursor-pointer  
                          checked:bg-blue-400"
        />

        <span
          className={`cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : "text-gray-600"
          }`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
      </div>

      <button
        className="text-red-600 hover:text-red-900"
        onClick={() => removeTodo(todo.id)}
        aria-label="Delete todo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5 4v6m4-6v6M4 7h16M10 3h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1h-4z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
