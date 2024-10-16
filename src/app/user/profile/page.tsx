'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome {username}</h1>
      <p className="text-lg mb-4">This is your profile page.</p>
      <p className="text-md mb-8">Here you can manage your settings and view your activity.</p>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
