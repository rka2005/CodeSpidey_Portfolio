import React from 'react';

// You would get this data from an API or a local JSON file
const projectsData = [
  {
    id: 1,
    title: 'Project Cybersilk',
    description: 'A next-gen e-commerce platform with AI-powered recommendations.',
    img: 'https://picsum.photos/seed/project1/600/400' // Placeholder image
  },
  {
    id: 2,
    title: 'Project Arachne',
    description: 'A real-time data visualization dashboard for a major fintech client.',
    img: 'https://picsum.photos/seed/project2/600/400' // Placeholder image
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Our Web of Work</h2>
      <div className="container projects__container">
        {projectsData.map((project) => (
          <article key={project.id} className="project-card">
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href="#">View Case Study</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;