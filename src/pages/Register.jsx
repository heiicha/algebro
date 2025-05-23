import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Check your email for a confirmation link!');
      navigate('/login');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-orange-300 to-red-400 px-4">
      <form onSubmit={handleRegister} className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md text-gray-800">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-black tracking-wide">
          Create an Account
        </h2>

        <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
          Email address:
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-6"
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password" className="block mb-2 font-semibold text-gray-700">
          Password:
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-6"
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-200 hover:text-orange-700 transition duration-300"
        >
          Register
        </button>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-600 font-medium hover:underline hover:text-yellow-400">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}
