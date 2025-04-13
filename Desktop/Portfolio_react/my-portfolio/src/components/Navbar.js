import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <a href="#home" className="text-xl font-bold text-blue-600">My Portfolio</a>
          </div>
          
          {/* Desktop Menu */}
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-3 md:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)} className="block py-2 px-4 hover:bg-gray-100">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="block py-2 px-4 hover:bg-gray-100">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block py-2 px-4 hover:bg-gray-100">Projects</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;