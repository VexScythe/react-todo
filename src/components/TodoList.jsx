import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.length === 0 && <p className="text-emerald-400 m-6">No Todos</p>}
      {todos.map((todo) => {
        return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />;
      })}
    </ul>
  );
}
