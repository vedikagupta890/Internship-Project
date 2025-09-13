import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      alert(JSON.stringify(data));
    } catch (err) {
      setError("⚠️ Network error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 to-red-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          🍕 Login to Foodie
        </h2>
        <input
          type="text"
          name="username"
          placeholder="Username or Email"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-semibold p-3 rounded-lg hover:bg-red-600 transition"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </form>
    </div>
  );
}
