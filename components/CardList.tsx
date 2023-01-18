// import {  useEffect, useState } from "react";
import { Card } from "./Card";
import projects from "../services/projects.json";
import { nanoid } from 'nanoid';


const CardList = () => {
  return (
    <section id="projects_section">
      <h2 className="text-4xl font-bold text-center py-4 ">Projects</h2>
      <ul className="p-4 bg-gray-800 text-white gap-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
      
        {projects.map((project) => (
          <Card
            key={nanoid()}
            id={project.id}
            description={project.description}
            githubUrl={project.githubUrl}
            image={project.image}
            title={project.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default CardList;
