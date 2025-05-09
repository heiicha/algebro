import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModeSelector({ level }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-semibold">Select Mode for {level.toUpperCase()}</h1>
      <button
        className="bg-black text-white px-6 py-2 rounded-2xl hover:bg-gray-800"
        onClick={() => navigate(`/quiz/${level}/general`)}
      >
        General Test Mode
      </button>
      <button
        className="bg-black text-white px-6 py-2 rounded-2xl hover:bg-gray-800"
        onClick={() => navigate(`/quiz/${level}/topic`)}
      >
        Topic-Based Mode
      </button>
    </div>
  );
}
