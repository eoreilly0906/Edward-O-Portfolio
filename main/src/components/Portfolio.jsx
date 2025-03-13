import React from 'react';

function Portfolio() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="border p-4">
            <h3 className="font-semibold">Project {index + 1}</h3>
            <a href="#" className="text-blue-500">Live Demo</a> | <a href="#" className="text-blue-500">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio; 