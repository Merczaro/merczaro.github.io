// src/components/AuthForm.js

import React, { useState } from 'react';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      if (isRegistering) {
        // Create a new user
        await window.auth.createUserWithEmailAndPassword(email, password);
        alert('Registration successful!');
      } else {
        // Sign in existing user
        await window.auth.signInWithEmailAndPassword(email, password);
        alert('Login successful!');
      }

      // Clear form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error with authentication: ', error);
      alert('There was an error with authentication. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl sm:text-3xl mb-4">{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleAuth} className="w-full sm:w-1/3 bg-white p-6 rounded shadow-lg">
        <div className="mb-4">
          <label className="block text-sm sm:text-base mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded text-sm sm:text-base"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm sm:text-base mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded text-sm sm:text-base"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
        >
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      <button
        onClick={() => setIsRegistering(!isRegistering)}
        className="mt-4 text-blue-600 hover:underline text-sm sm:text-base"
      >
        {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
      </button>
    </div>
  );
};

export default AuthForm;
