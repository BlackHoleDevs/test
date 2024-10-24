import React, { useState } from 'react';

interface SignInProps {
  setCurrentPage: (page: string) => void;
}

function SignIn({ setCurrentPage }: SignInProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Add your sign-in logic here
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="py-4 px-6 bg-gradient-to-r from-blue-500 to-teal-400">
          <h2 className="text-3xl font-bold text-white text-center">Sign In</h2>
        </div>
        <form onSubmit={handleSubmit} className="py-4 px-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-2 px-4 rounded-md hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:shadow-outline transition duration-300"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage('forgotpassword')}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;