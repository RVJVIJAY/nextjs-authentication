"use client"; // Ensure that this component is a client component

import { useRouter } from "next/navigation"; // Correctly import useRouter

export default function Home() {
  const router = useRouter(); // Use the hook to get the router instance

  const handleSignUp = () => {
    router.push('/user/signup'); // Navigate to the signup page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h1>
    <p className="text-lg text-gray-600 mb-6">To new users, click below to join:</p>
    <button
      onClick={handleSignUp}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
    >
      Join Now
    </button>
  </div>
  );
}
