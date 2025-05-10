"use client";

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="space-y-2">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`flex justify-between items-center p-2 border rounded ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          <span
            onClick={() => onToggle(index)}
            className="flex-1 cursor-pointer"
          >
            {task.text}
          </span>
          <button
            onClick={() => onDelete(index)}
            className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 ml-2"
          >
            Hapus
          </button>
        </li>
      ))}
    </ul>
  );
}
