'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const route=useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password}),
      });

      if (res.ok) {
        localStorage.setItem('user',email)
        route.push('/user/profile')
        alert('Login successful');
      } else {
        alert('Login failed');
      }
    } catch (err) {
        console.log(err)
      alert('An error occurred');
    }
  };

  return (
  <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
  <label className="mb-2 text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
  <input
    type="text"
    id="email"
    placeholder="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <label className="mb-2 text-sm font-semibold text-gray-700" htmlFor="password">Password</label>
  <input
    type="password"
    id="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <button type="submit" className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200">Login</button>
</form>

  );
}
