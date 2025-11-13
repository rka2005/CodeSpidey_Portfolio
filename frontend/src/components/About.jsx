import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>Why We Weave</h2>
      <div className="container about__container">
        <article className="glass-card about__card">
          <h4>Who We Are</h4>
          <p>
            We are a collective of expert developers, designers, and strategists
            passionate about building intricate and beautiful digital solutions.
          </p>
        </article>
        
        <article className="glass-card about__card">
          <h4>What We Do</h4>
          <p>
            From complex web applications to stunning landing pages, we design,
            develop, and deploy with precision. We specialize in React, Node.js, and futuristic UI/UX.
          </p>
        </article>

        <article className="glass-card about__card">
          <h4>Our Philosophy</h4>
          <p>
            Like a spider's web, our code is strong, efficient, and perfectly
            structured. We believe in quality, scalability, and pixel-perfect execution.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;