import React from 'react'
import { averageSans, spaceMono } from '../styles/fonts'
import skills from '../data/skills.json';

const AboutSection = () => {
  return (
    <section
      id='about-section'
      className='
    bg-[#e85f82] min-h-screen  flex items-center 
    '>
      <div className='flex  gap-8 p-8 md:p-40 flex-col'>
        <h1
          className={`mb-7 text-3xl md:text-5xl font-extrabold text-transparent md:w-1/4 w-1/2 bg-clip-text  bg-gradient-to-r from-[#ffffff] to-[#e2a812] ${spaceMono.className}`}>&gt;
          about
        </h1>
        <div id="about-body" className='flex flex-col gap-4 md:w-4/5'>
          <p className={`text-white ${averageSans.className} text-lg md:text-xl `}>
            Hello World!
          </p>
          <p className={`text-white ${averageSans.className} text-lg md:text-xl`}>


            My name is Saadia and I am entering my 4th year of studying computer science @ Toronto Metropolitan University. I am an aspiring fullstack developer, and I am interested in learning more about cloud computation, machine learning, and natural language processing.
          </p>
          <p className={`text-white ${averageSans.className} text-lg md:text-xl`}> Here are some of the technologies I am familiar with:</p>
          <ul className='grid grid-cols-2 md:grid-cols-5 gap-2'>
            {skills.map((skill, index) => (
              <li key={index} className={`text-white ${averageSans.className} text-base`}>
                <span className='text-[#ffd3a0]'>▹      </span>
                {skill.skill}
              </li>
            ))}
          </ul>

          <p className={`text-white ${averageSans.className} text-lg md:text-xl`}>I am also a freelance photographer and enjoy shooting weddings and portraits. In my spare time, you can find me learning a new hobby or digital painting.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 