import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Quiz() {
  const { level, mode } = useParams();
  const [question, setQuestion] = useState('What is 2 + 2?');
  const [difficulty, setDifficulty] = useState('Easy');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const submitAnswer = async () => {
    // Placeholder: replace with backend POST
    const correct = answer.trim() === '4';
    setFeedback(correct ? 'Correct!' : 'Try again.');
  };

  const getHint = async () => {
    // Placeholder: replace with backend call
    setFeedback('Hint: Think basic addition.');
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">{level.toUpperCase()} - {mode} Mode</h2>
      <p className="text-gray-700 mb-2">Difficulty: {difficulty}</p>
      <p className="text-lg mb-4">{question}</p>
      <input
        className="w-full p-2 rounded-2xl border border-gray-400 mb-4"
        placeholder="Your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <div className="flex gap-4">
        <button className="bg-black text-white px-4 py-2 rounded-2xl" onClick={submitAnswer}>Submit</button>
        <button className="border border-black px-4 py-2 rounded-2xl" onClick={getHint}>Hint</button>
      </div>
      {feedback && <p className="mt-4 text-gray-600">{feedback}</p>}
    </div>
  );
}
