import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModeSelector({ level }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-6 mt-16 px-4">
      <h1 className="text-3xl font-extrabold text-center text-indigo-900 mb-8 tracking-wide">
        Select Mode for <span className="text-purple-700">{level.toUpperCase()}</span>
      </h1>
      <div className="flex flex-col gap-5 max-w-md w-full">
        <button
          onClick={() => navigate(`/quiz/${level}/general`)}
          className="bg-indigo-600 text-white py-4 rounded-3xl font-semibold shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          General Test Mode
        </button>
        <button
          onClick={() => navigate(`/quiz/${level}/topic`)}
          className="bg-purple-600 text-white py-4 rounded-3xl font-semibold shadow-lg hover:bg-purple-700 transition duration-300"
        >
          Topic-Based Mode
        </button>
      </div>
    </div>
  );
}
