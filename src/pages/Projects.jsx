import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import projects from "../data/projectData";

const Projects = () => {
  return (
    <div>
      <h1 className="text-tema font-bold md:text-5xl text-4xl mt-20 mb-10">Projetos</h1>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`flex md:flex-nowrap justify-between flex-wrap text-lg gap-8 mb-20 
            ${project.id % 2 == 0 ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <div>
            <img src={project.image} className="min-w-[270px] w-[450px]"/>
          </div>
          <div className="flex flex-col text-wrap gap-2 text-base">
            <h2 className="md:text-3xl text-xl font-semibold">
              <span className="text-tema">{project.id}. </span>
              {project.title}
            </h2>
            <p className="text-gray-400">{project.description}</p>
            <ul className="flex gap-2 flex-wrap">
              {project.techs.map((tech) => (
                <li key={tech} className="bg-gray-700 px-2 py-1 rounded-sm">{tech}</li>
              ))}
            </ul>
            <div className="flex gap-4 h-full items-end">
              <a href={project.urllive} target="_blank" className="btn flex items-center gap-1">
                Live <RiArrowRightUpLine />
              </a>
              <a href={project.urlsource} target="_blank" className="btn flex items-center gap-1">
                Github <RiArrowRightUpLine />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
