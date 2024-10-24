import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to handle the password reset
    console.log('Password reset requested for:', email);
    setMessage('If an account exists for this email, you will receive password reset instructions.');
    // Add your password reset logic here
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="py-4 px-6 bg-gradient-to-r from-blue-500 to-teal-400">
          <h2 className="text-3xl font-bold text-white text-center">Forgot Password</h2>
        </div>
        <form onSubmit={handleSubmit} className="py-4 px-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-2 px-4 rounded-md hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:shadow-outline transition duration-300"
            >
              Reset Password
            </button>
          </div>
        </form>
        {message && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;