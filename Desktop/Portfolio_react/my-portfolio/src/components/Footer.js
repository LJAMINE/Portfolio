import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        
        <div className="flex justify-center space-x-4">
          {/* Simple social links */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;