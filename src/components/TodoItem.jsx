export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="relative flex h-11 w-full min-w-[200px] max-w-[24rem] m-6 border border-zinc-900 rounded-md">
      <label className="flex items-center justify-center">
        <input
          className="m-3 accent-emerald-500 w-6"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {completed ? (
          <p className="text-2xl text-zinc-600 line-through">{title}</p>
        ) : (
          <p className="text-2xl text-zinc-700">{title}</p>
        )}
      </label>
      <button
        className="!absolute right-1 top-1 z-10 select-none rounded bg-red-400 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-400/20 transition-all hover:shadow-lg hover:shadow-red-400/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
        onClick={() => deleteTodo(id)}
      >
        DELETE
      </button>
    </li>
  );
}
