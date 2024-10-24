import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [signupCode, setSignupCode] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const response = await axios.post('/api/auth/login/', { email, password });
                console.log(response.data);
                localStorage.setItem('token', response.data.access_token);
            } else {
                if (password !== password2) {
                    alert("Passwords don't match");
                    return;
                }
                const response = await axios.post('/api/auth/registration/', {
                    email,
                    password1: password,
                    password2,
                    signup_code: signupCode
                });
                console.log(response.data);
                localStorage.setItem('token', response.data.access_token);
            }
            // Redirect or update app state
        } catch (error) {
            console.error('An error occurred:', error);
            alert(error.response?.data?.detail || 'An error occurred');
        }
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="py-4 px-6 bg-gradient-to-r from-blue-500 to-teal-400">
                    <h2 className="text-3xl font-bold text-white text-center">
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="py-4 px-6">
                    <div className="mb-4">
                        <label htmlFor="email-address" className="block text-gray-700 font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {!isLogin && (
                        <>
                            <div className="mb-4">
                                <label htmlFor="password2" className="block text-gray-700 font-bold mb-2">
                                    Repeat Password
                                </label>
                                <input
                                    id="password2"
                                    name="password2"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Repeat Password"
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="signup-code" className="block text-gray-700 font-bold mb-2">
                                    Signup Code
                                </label>
                                <input
                                    id="signup-code"
                                    name="signup-code"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Signup Code"
                                    value={signupCode}
                                    onChange={(e) => setSignupCode(e.target.value)}
                                />
                            </div>
                        </>
                    )}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-2 px-4 rounded-md hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:shadow-outline transition duration-300"
                        >
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        >
                            {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
