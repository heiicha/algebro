import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import ModeSelector from './pages/ModeSelector';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black p-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/h1" element={<ModeSelector level="h1" />} />
          <Route path="/h2" element={<ModeSelector level="h2" />} />
          <Route path="/quiz/:level/:mode" element={<Quiz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
