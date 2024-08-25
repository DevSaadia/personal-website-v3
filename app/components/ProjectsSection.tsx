import React from 'react'
import { spaceMono } from '../styles/fonts'
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'
import ChakraCard from './ChakraCard'
import NextUICard from './NextUICard'

const ProjectsSection = () => {
  return (
    <section
      id='projects-section'
      className='bg-[#ffe8e2] min-h-screen  flex items-center '>
      <div className='flex gap-8 flex-col w-full m-8 md:m-24 2xl:m-56 '>
        <h1
          className={`mb-7 text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#e54971] to-[#e2a812] ${spaceMono.className}`}>&gt; projects </h1>
        <div id='projects-group' className='flex flex-col w-full justify-start md:flex-row flex-wrap md:justify-start '>
          {/* {projects.map((project: any, index: React.Key | null | undefined) => (
            <ProjectCard
              key={index} title={project.title} description={project.description} image={project.image} github={project.github} url={project.url} />
          ))} */}

          <br />
          {/* testing chakra card here */}
          {/* {projects.map((project: any, index: React.Key | null | undefined) => (
            <ChakraCard
              key={index} title={project.title} description={project.description} image={project.image} github={project.github} url={project.url} technologies={project.technologies} />
          ))} */}
          {/* testing nextui card here */}
          {projects.map((project: any, index: React.Key | null | undefined) => (
            <NextUICard
              key={index} title={project.title} description={project.description} image={project.image} github={project.github} url={project.url} technologies={project.technologies} />
          ))}
        </div>

      </div>

    </section>)
}

export default ProjectsSection