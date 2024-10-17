'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';

const Profile = () => {
  const router = useRouter();
  const username = localStorage.getItem('user');

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('user');

    // Clear the cookie - make sure the domain and path match those used by the server
    //document.cookie = 'token=; path=/; domain=localhost; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure';
    document.cookie = 'token' + 
    '=; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    // Redirect to login after logout
    router.push('/user/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    {/* Navbar */}
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">MyApp</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Profile</li>
          <li className="hover:text-gray-200 cursor-pointer">Settings</li>
        </ul>
      </div>
    </nav>

    {/* Main Content */}
    <div className="container mx-auto flex-1 flex flex-col items-center justify-center py-12">
      <h1 className="text-2xl font-bold mb-4">Welcome, {username}</h1>
      <p className="text-lg mb-4">This is your profile page.</p>
      <p className="text-md mb-8">Manage your settings and view your activity below.</p>

      {/* Profile Card */}
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center max-w-sm">
        <img
          className="w-24 h-24 rounded-full mb-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&s"
          alt="Profile Avatar"
        />
        <h2 className="text-xl font-semibold mb-2">{username}</h2>
        <p className="text-gray-500 mb-6">Member since 2023</p>
        
        {/* Buttons */}
        <div className="w-full space-y-4">
          <button className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-gray-400 cursor-pointer">Terms of Service</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </footer>
  </div>
  );
};

export default Profile;
