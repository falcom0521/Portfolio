import React from 'react';
import "./projects.css";
import { Data } from "./Data";

const Projects = () => {
  return (
    <section className="project container section" id='projects'>
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="project__container container grid">
        {Data.map(({ id, image, title, description, url }) => {
          return (
            <a href={url} className="project__card" key={id} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={title} className='project__img'/>
              <h3 className="project__name">{title}</h3>
              <p className="project__description">{description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
