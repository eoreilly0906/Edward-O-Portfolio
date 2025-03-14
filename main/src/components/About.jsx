import React from 'react';
import profilePhoto from '/assets/profile-photo.jpg';

//About component
function About() {
  return (
    <section className="text-center p-4">
      <img src={profilePhoto} alt="Edward O'Reilly" className="max-w-xs rounded-full" />
      <p className="mt-4">Hello! My name is Edward O'Reilly! </p>
      <p className="mt-4">I'm a software developer as well as musician.</p>
      <p className="mt-4"> I have just started a challenging coding bootcamp and have been enjoying learning and implementing what I've learned into various projects. My goal is to be able to develop software to improve the quality of life for everyone throughout the world and the software field.  </p>
    </section>
  );
}

export default About; 