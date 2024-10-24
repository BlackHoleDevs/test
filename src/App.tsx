import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
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
      case 'auth':
        return <Auth />;
      case 'forgotpassword':
        return <ForgotPassword />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-extrabold text-blue-900">OneM.dev</div>
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Auth'].map((item) => (
              <button
                key={item}
                className="px-3 py-2 rounded-lg text-blue-700 font-medium hover:bg-blue-100 hover:shadow-lg hover:text-blue-900 transition duration-300"
                onClick={() => setCurrentPage(item.toLowerCase().replace(' ', ''))}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              className="text-blue-700 hover:text-blue-900 transition duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
            {['Home', 'About', 'Auth'].map((item) => (
              <button
                key={item}
                className="block w-full text-left px-4 py-2 text-blue-700 hover:bg-blue-50 hover:shadow-inner rounded-lg transition duration-300"
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
      <main className="mt-6">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 mt-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 OneM.dev All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
