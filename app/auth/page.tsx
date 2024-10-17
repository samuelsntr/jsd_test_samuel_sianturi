"use client";
import React, { useState } from "react";
import { login } from "@/lib/auth"; // Adjust the import path as necessary
import { toast } from "react-toastify"; // Import toast
import { useRouter } from "next/navigation"; // Correct import for useRouter

const LoginForm = () => {
  const router = useRouter(); // Use the useRouter hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userData = await login(username, password);
      console.log("Login successful:", userData);
      toast.success("Login successful!"); // Success toast
      router.push("/species"); // Redirect to home page
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Invalid username or password"); // Error toast
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
