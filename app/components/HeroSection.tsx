"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { spaceMono, averageSans } from '../styles/fonts';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section
            id='hero-section'
            className='
            bg-[#ffe8e2] 
            h-screen  
            flex 
            items-center 
            '>
            <div className='flex flex-col-reverse  md:flex-row items-center justify-center md:justify-between gap-8  md:gap-24 lg:gap-96 p-8 md:p-24 w-full'>
                <div id='hero-content' className='md:flex-1 '>
                    <h1
                        className={`mb-7 text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e54971] to-[#e2a812] ${spaceMono.className}`}>&gt;
                        <TypeAnimation
                            className='ml-6 '
                            sequence={["whoissaadia", 1000, "pwd", 1000, "ls", 1000]}
                            wrapper='span'
                            speed={20}
                            repeat={Infinity} />
                    </h1>
                    <p className={`w-full md:w-96 ${averageSans.className} sm:text-lg md:text-xl mb-6`}>Driven by creativity, innovation and a desire to foster community among the minority groups in the tech industry.</p>
                    <div id='buttons-container' className='flex flex-col md:flex-row gap-4'>
                        <button
                            className='
                                px-6
                                py-2
                                w-full
                                md:auto
                                rounded-full
                                bg-[#e54971]
                                transition
                                duration-300
                                hover:bg-[#b23554]
                              text-white 
                                 mt-3'
                            aria-label='Hire Me'
                            onClick={() => window.open("mailto:saadia.shahid@torontomu.ca?subject=Hello Saadia&body=Hi...", "_blank")}
                        >
                            Hire Me
                        </button>
                        <button
                            className='
                             px-6
                             py-2
                             w-full
                             md:auto
                             rounded-full
                             transition
                             duration-300
                             hover:bg-white
                           text-[#e54971]
                           ring-inset
                           ring-4
                           ring-[#e54971]
                              mt-3'
                            onClick={() => window.open("/files/Saadia_Shahid_resume.pdf", "_blank")}
                        >
                            Download CV
                        </button>


                    </div>
                </div>
                <div id='hero-image' className='md:flex-1 flex justify-center md:justify-end rounded-2xl w-[400px] h-[400px] md:w-[250px] md:h-[250px]'>
                    <Image
                        className='object-cover object-top rounded-2xl shadow-md w-full h-full'
                        src="/images/me.jpg"
                        width={400}
                        height={400}
                        alt="Saadia's image"
                    />
                </div>
            </div>
        </section >
    )
}

export default HeroSection