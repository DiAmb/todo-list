import { useState } from "react";

import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const clearTodos = () => {
    if (
      window.confirm("¿Estás seguro de que deseas eliminar todas las tareas?")
    ) {
      setTodos([]);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Todo List</h1>
          <TodoForm addTodo={addTodo} />

          <div className="max-h-96 overflow-y-auto mb-4">
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          </div>

          {todos.length > 0 && (
            <button
              onClick={clearTodos}
              className="mt-4 bg-red-100 text-red-700 py-2 px-4 rounded-lg border border-red-300 shadow-sm hover:bg-red-200 hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out w-full"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <footer className="bg-gray-800 py-4 text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="text-lg font-medium">Luis Diego Ambrocio Ramirez</div>
          <div className="text-sm">2024 TypeScript Bootcamp</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
