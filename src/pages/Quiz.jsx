import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Quiz() {
  const { level, mode } = useParams();
  const [question, setQuestion] = useState('Is Lance a troublemaker?');
  const [difficulty, setDifficulty] = useState('Easy');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const submitAnswer = async () => {
    const correct = answer.trim() === 'Yes';
    setFeedback(correct ? 'Correct!' : 'Try again.');
  };

  const getHint = async () => {
    setFeedback('Hint: Think common sense.');
  };

  // Handle Enter key press on input
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitAnswer();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-extrabold mb-2 text-indigo-900">
        {level.toUpperCase()} - <span className="text-purple-700">{mode} Mode</span>
      </h2>
      <p className="text-gray-600 mb-4">Difficulty: {difficulty}</p>
      <p className="text-lg mb-6">{question}</p>
      <input
        className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 mb-6"
        placeholder="Your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="flex gap-5">
        <button
          className="bg-indigo-600 text-white py-3 rounded-2xl font-semibold shadow-md hover:bg-indigo-700 transition duration-300 flex-1"
          onClick={submitAnswer}
        >
          Submit
        </button>
        <button
          className="border border-indigo-600 text-indigo-600 py-3 rounded-2xl font-semibold hover:bg-indigo-50 transition duration-300 flex-1"
          onClick={getHint}
        >
          Hint
        </button>
      </div>
      {feedback && <p className="mt-6 text-gray-700 text-center font-medium">{feedback}</p>}
    </div>
  );
}
