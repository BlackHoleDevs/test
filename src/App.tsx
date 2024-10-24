import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'signup':
        return <SignUp />;
      case 'signin':
        return <SignIn setCurrentPage={setCurrentPage} />;
      case 'forgotpassword':
        return <ForgotPassword />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">VideoAI</div>
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Sign Up', 'Sign In'].map((item) => (
              <button
                key={item}
                className="text-blue-700 hover:text-blue-900 transition duration-300"
                onClick={() => setCurrentPage(item.toLowerCase().replace(' ', ''))}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            {['Home', 'About', 'Sign Up', 'Sign In'].map((item) => (
              <button
                key={item}
                className="block w-full text-left px-4 py-2 text-blue-700 hover:bg-blue-50 transition duration-300"
                onClick={() => {
                  setCurrentPage(item.toLowerCase().replace(' ', ''));
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Your Video Creation Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;