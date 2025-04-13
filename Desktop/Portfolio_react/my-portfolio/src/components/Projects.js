import React, { useState, useEffect } from "react";

import { getProjects } from '../services/api';


function Projects() {
      const [projects, setprojects] = useState([]);
    

 useEffect(()=>{
    const fetchProjects=async ()=>{
        try {
            const data=await getProjects();
            setprojects(data)
            console.log(data)
        } catch (err) {
            console.log(err)

        }
    };
    fetchProjects();
 },[])

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x300?text=Project+Image";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a 
                href={project.github_link} 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;