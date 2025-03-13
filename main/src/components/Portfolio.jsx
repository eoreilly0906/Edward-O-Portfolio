import React from 'react';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Coffee Shop Employees",
      description: "Employee management system for coffee shops",
      liveDemo: "https://drive.google.com/file/d/1Dzz1ugonDJP36Abv1Hoeu_4539TpNOTr/view",
      github: "https://github.com/eoreilly0906/CoffeeShopEmployees",
      image: "/path-to-image.jpg" // You can add image paths later
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for project 2",
      liveDemo: "/Users/edwardoreilly/Desktop/Screenshot%202025-03-05%20at%201.35.46%E2%80%AFPM.png",
      github: "https://github.com/eoreilly0906/AI-Weather-Person",
      image: "/path-to-image.jpg"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for project 3",
      liveDemo: "#",
      github: "#",
      image: "/path-to-image.jpg"
    },
    // Add more projects as needed
    {
      id: 4,
      title: "Project 4",
      description: "Description for project 4",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description for project 5",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description for project 6",
      liveDemo: "#",
      github: "#",
    }
  ];

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex gap-4">
              <a href={project.liveDemo} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.github} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio; 