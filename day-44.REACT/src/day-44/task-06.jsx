import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice JavaScript" },
    { id: 3, text: "Build Projects" }
  ]);

  return (
    <div style={{ margin: "20px" }}>
      <h2>6.Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
