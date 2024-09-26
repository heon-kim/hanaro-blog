import { useState, useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TodoComponent() {
  const [todos, setTodos] = useState<Todo[]>([]); // 배열로 초기화
  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 5)))
      .catch((error) => console.error("Error fetching todos:", error)); // 에러 핸들링 추가
  }, []);

  return (
    <div>
      <h1>Todo Information</h1>
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" defaultChecked={todo.completed} />
              <span>{todo.title}</span>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default TodoComponent;
