import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 to-yellow-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          🍔 Sign Up for Foodie
        </h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold p-3 rounded-lg hover:bg-orange-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
