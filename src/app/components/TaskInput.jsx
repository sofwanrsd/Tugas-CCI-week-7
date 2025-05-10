"use client";
import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 p-2 border border-gray-300 rounded"
        placeholder="Tambahkan list tugas..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Tambah
      </button>
    </div>
  );
}
