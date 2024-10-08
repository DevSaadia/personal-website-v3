import React from 'react'
import { averageSans, spaceMono } from '../styles/fonts'
import Link from 'next/link';
import skills from '../data/skills.json';
import { Tooltip } from "@nextui-org/tooltip";
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section
      id='about-section'
      className='
      bg-[#e85f82] 
      min-h-screen  
      flex items-center 
    '>
      <div className='
      flex  
      gap-8 
      m-8 
      md:m-24 
      2xl:m-56 
      flex-col'>
        <h1
          className={`mb-7 
          text-4xl 
          md:text-4xl 
          lg:text-5xl 
          xl:text-6xl 
          font-extrabold 
          text-transparent 
          w-fit
          inline-block 
          bg-clip-text  
          bg-gradient-to-r 
          from-[#ffffff] 
          to-[#e2a812] 
          ${spaceMono.className}`}>
          &gt;
          about</h1>
        <div
          id="about-body"
          className='
          flex 
          flex-col 
          gap-4 
          w-full'
        >
          <p className={`
            text-white 
            ${averageSans.className} 
            text-lg 
            md:text-xl 
            `}>
            Hello World!
          </p>
          <p className={`
            text-white 
            ${averageSans.className} 
            text-lg 
            md:text-xl`}
          >
            My name is Saadia and I am a 4th year computer science student @{" "}
            <Tooltip
              showArrow
              content={
                <Image
                  className='rounded-md h-full'
                  src="/images/university-website-preview.png" width={200} height={100} alt='image'
                />
              }
              placement='top'
              classNames={{
                base: [
                  // arrow color
                  "before:bg-white dark:before:bg-white",
                ],
                content: [
                  "py-2 px-2 shadow-xl",
                  "bg-white",
                ],
              }}
            >
              <Link
                href='https://www.torontomu.ca/'
                className='
              text-[#ffe196] 
              hover:underline'
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Toronto Metropolitan University</strong>
              </Link></Tooltip>
            . I am an aspiring fullstack software developer, and am interested in learning more about Cloud Computation, Machine Learning, and Natural Language Processing. <br />
            Lately, I have been working with JavaScript frameworks and technologies such as NextJS, React, Tailwind CSS, and TypeScript.
          </p>
          <p className={`
            text-white 
            ${averageSans.className} 
            text-lg 
            md:text-xl
            `}
          >
            Below are some of the technologies I know:
          </p>
          <ul className='
          grid 
          grid-cols-2 
          md:grid-cols-5 
          gap-2 
          flex-nowrap'
          >
            {skills.map((skill, index) => (
              <li
                key={index}
                className={`
                text-white 
                ${averageSans.className} 
                text-base 
                flex-nowrap  
                relative
                `}
              >
                <span className='text-[#ffd3a0] absolute left-0'>▹</span>
                <span className='ml-6'>{skill.skill}</span>
              </li>
            ))}
          </ul>
          <p className={`
            text-white 
            ${averageSans.className} 
            text-lg 
            md:text-xl
            `}
          >
            I have multifaceted interests and have background in marketing, graphic design, photography, and biology. I love working with community and school groups (Lunar Hub, Women in Computer Science, Practical Applications in Computer Science, TerraHacks, etc) in organizing workshops, hackathons, and networking events in making technology more accessible to the masses.
          </p>
          <p className={`
            text-white 
            ${averageSans.className} 
            text-lg 
            md:text-xl
            `}
          >
            I am also a{" "}
            <Tooltip
              showArrow
              content={
                <Image
                  className='rounded-md h-full'
                  src="/images/photography-website-preview.png" width={200} height={100} alt='image'
                />
              }
              placement='top'
              classNames={{
                base: [
                  // arrow color
                  "before:bg-white dark:before:bg-white",
                ],
                content: [
                  "py-2 px-2 shadow-xl",
                  "bg-white",
                ],
              }}
            >
              <Link
                href='https://www.saadiashahid.ca/'
                className='text-[#ffe196] hover:underline'
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>freelance photographer</strong>
              </Link >
            </Tooltip>
            {" "}and enjoy shooting weddings and portraits. In my spare time, you can find me learning a new hobby or digital painting.</p>
        </div>
      </div >
    </section >
  )
}

export default AboutSection 