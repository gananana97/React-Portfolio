import React from 'react';

const Portfolio = () => {
  const projects = [
    { name: 'BookTalks', url: 'https://github.com/jerrietkuo/BookTalks' },
    { name: 'Health and Fitness Tracker', url: 'https://github.com/chxdior/Health-and-Fitness-Tracker-App' },
  ];

  return (
    <section>
      <h1>Portfolio</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={`path_to_project_image_${index}.jpg`} alt={project.title} />
            <h3>{project.title}</h3>
            <p>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
