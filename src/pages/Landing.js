import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold cursor-pointer hover:text-gray-600" onClick={() => navigate('/h1')}>H1</h1>
      <h2 className="text-3xl font-semibold cursor-pointer hover:text-gray-600" onClick={() => navigate('/h2')}>H2</h2>
    </div>
  );
}
