import React from 'react';

function Resume() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">Resume</h2>
      <a href="/resume.pdf" className="text-blue-500">Download My Resume</a>
      <ul className="list-disc mt-4 ml-4">
        <li>JavaScript (ES6+)</li>
        <li>React & Node.js</li>
        <li>Database Management</li>
      </ul>
    </section>
  );
}

export default Resume; 