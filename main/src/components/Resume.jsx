import React from 'react';

function Resume() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Resume</h2>
      <a href="/assets/Edward-OReilly-Resume.pdf" className="text-blue-500">Download My Resume</a>
      <ul className="list-disc mt-4 ml-4">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Database Management</li>
      </ul>
    </section>
  );
}

export default Resume; 