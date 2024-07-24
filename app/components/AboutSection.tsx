import React from 'react'
import { averageSans, spaceMono } from '../styles/fonts'

const AboutSection = () => {
  return (
    <section
      id='about-section'
      className='
    bg-[#e85f82] h-screen  flex items-center
    '>
      <div className='flex  gap-8 p-24 flex-col'>
        <h1
          className={`mb-7 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#e2a812] ${spaceMono.className}`}>&gt;
          about
        </h1>
        <p className={`text-white ${averageSans.className} text-lg`}>
          Hello World!
        </p>
        <p className={`text-white ${averageSans.className} text-lg`}>


          My name is Saadia and I am entering my 4th year of studying computer science @ Toronto Metropolitan University. I am an aspiring fullstack developer, and I am interested in learning more about cloud computation, machine learning, and natural language processing.

          Here are some of the technologies I am familiar with:
        </p>

        <p className={`text-white ${averageSans.className} text-lg`}>I am also a freelance photographer and enjoy shooting weddings and portraits. In my spare time, you can find me learning a new hobby or digital painting.</p>
      </div>
    </section>
  )
}

export default AboutSection 