import { useState } from "react";

function TodoLists() {
  const [todos, setTodos] = useState([]);

  return (
    <div style={{ margin: "20px" }}>
      <h2>7.Todo List</h2>

      {/* Conditional Rendering */}
      {todos.length === 0 ? (
        <p>No Todos yet</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoLists;
