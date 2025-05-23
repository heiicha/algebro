import { useState } from "react";
import { supabase } from "../supabaseClient";  // adjust path if needed
import Swal from "sweetalert2";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Logged in!",
        timer: 1500,
        showConfirmButton: false,
      });
      // Optionally redirect or update UI here
      // e.g. window.location.href = "/";
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-200 via-orange-300 to-red-400 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md text-gray-800">
        <h1 className="text-4xl font-extrabold text-center text-black mb-6 tracking-wide">
          Welcome to <span className="text-red-400">Algebro</span>
        </h1>
        <p className="text-center text-lg mb-8 font-medium text-gray-600">
          Log in to continue
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address:
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-yellow-200 hover:text-orange-700 transition duration-300"
          >
            LOG IN
          </button>
        </form>

        {/* Bottom Link */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-orange-600 font-medium hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
