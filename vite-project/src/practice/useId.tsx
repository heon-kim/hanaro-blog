import { useId } from "react";

interface TodoListProps {
  items: string[];
}
function TodoList({ items }: TodoListProps) {
  const id = useId(); // 고유한 ID 생성

  return (
    <ul>
      {items.map((item, index) => (
        <li key={`${id}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

const App = () => {
  const todoItems = ["Learn React", "Build a project", "Master TypeScript"];

  return (
    <div>
      <TodoList items={todoItems} />
    </div>
  );
};

export default App;
