import React from 'react'
import { spaceMono } from '../styles/fonts'
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section
      id='projects-section'
      className='bg-[#ffe8e2] min-h-screen  flex items-center'>
      <div className='flex gap-8 p-8 md:p-24 flex-col'>
        <h1
          className={`mb-7 text-3xl md:text-5xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#e54971] to-[#e2a812] ${spaceMono.className}`}>&gt; projects </h1>
        <div id='projects-group' className='flex  flex-col flex-wrap justify-center md:flex-row gap-4'>
          {projects.map((project: any, index: React.Key | null | undefined) => (
            <ProjectCard key={index} title={project.title} description={project.description} image={project.image} github={project.github} url={project.url} />
          ))}
        </div>
      </div>
    </section>)
}

export default ProjectsSection