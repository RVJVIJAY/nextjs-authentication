'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {toast }from 'react-toastify'


export default function SignupPage() {
    const route=useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email,setEmail]=useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username,email, password}),
      });

      // console.log(res)
      if (res.ok) {
        toast.success('signup successfull!', {
          position: 'top-right', // Position at top right
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: false, // Show progress bar
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        route.push('/user/login')
      } else {
        //alert('Signup failed');
         toast.error("Signup Failed", {
      position: 'top-right', // Position at top right
      autoClose: 3000, // Auto close after 3 seconds
      hideProgressBar: false, // Show progress bar
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
      }
    } catch (err) {
        console.log(err)
      toast.error('An error occurred');
    }
  };

  return (
<form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
  <h1 className='text-center mb-3'>Signup Form</h1>
  <label className="mb-2 text-sm font-semibold text-gray-700" htmlFor="username">Username</label>
  <input
    type="text"
    id="username"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <label className="mb-2 text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
  <input
    type="email"
    id="email"
    placeholder="Email"
    value={email} // Updated value to email instead of username
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

  <button type="submit" className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200">Signup</button>
</form>

  );
}
