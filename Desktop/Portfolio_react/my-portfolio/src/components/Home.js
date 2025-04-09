import React from 'react';

function Home() {
  return (
    <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">AMINE LAMGARMAJ</span>
        </h1>
        <h2 className="text-2xl mb-6">
          Web Developer
        </h2>
        <p className="mb-8">
          I build websites and applications using modern technologies.
        </p>
        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          View My Work
        </a>
      </div>
      <div className="md:w-1/2 mb-10 md:mb-0">
        <img 
          src="/images/face.webp" 
          alt="Profile" 
          className="w-64 h-64 mx-auto rounded-full border-4 border-blue-600"
          onError={(e) => {
            e.target.src = "/images/face.webp";
        }}
        />
      </div>
    </div>
  );
}

export default Home;