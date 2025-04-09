import React from 'react';

function About() {
    
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      
      <div className="md:flex">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Who I Am</h3>
          <p className="mb-4">
            I'm a web developer passionate about creating responsive and user-friendly websites.
            I enjoy learning new technologies and solving problems through code.
          </p>
          <p>
            When I'm not coding, I enjoy reading, hiking, and playing video games.
          </p>
        </div>
        
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-xl font-bold mb-4">My Skills</h3>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full m-1">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;