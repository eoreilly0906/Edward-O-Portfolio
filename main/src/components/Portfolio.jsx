import React from 'react';
//Portfolio component
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
      title: "AI Weather Person",
      description: "Weather app that uses AI to predict the weather as Shaggy from Scooby Doo",
      liveDemo: "/Users/edwardoreilly/Desktop/Screenshot%202025-03-05%20at%201.35.46%E2%80%AFPM.png",
      github: "https://github.com/eoreilly0906/AI-Weather-Person",
      image: "/path-to-image.jpg"
    },
    {
      id: 3,
      title: "It's The Journey",
      description: "A build your own vehice project using typescript and Node.js",
      liveDemo: "https://drive.google.com/file/d/1APmtAO9miZN6gbOwB1CC2CfI8XBZ4OR0/view",
      github: "https://github.com/eoreilly0906/It-s-The-Journey",
      image: "/path-to-image.jpg"
    },
    {
      id: 4,
      title: "The Melt Down",
      description: "A group project that uses HTML, CSS, and JavaScript to create a website for an Ice Cream Shop",
      liveDemo: "https://pricilla-francis.github.io/Project-1/",
      github: "https://github.com/eoreilly0906/project-1",
      image: "/path-to-image.jpg"
    },
    {
      id: 5,
      title: "Read Me BOT 9000",
      description: "A command line application that generates a README file using Node.js",
      liveDemo: "https://drive.google.com/file/d/1DLgETY1Vb10H_f13qtVzQ0A0-TQlloYR/view",
      github: "https://github.com/eoreilly0906/README-BOT-9000",
      image: "/path-to-image.jpg"
    },
    {
      id: 6,
      title: "Rainy Days",
      description: "A weather app that uses OpenWeather API to display weather information for a specific city",
      liveDemo: "https://rainy-days.onrender.com/",
      github: "https://github.com/eoreilly0906/Rainy-Days",
      image: "/path-to-image.jpg"
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