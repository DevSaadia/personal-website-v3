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
            <div className='flex flex-col-reverse  md:flex-row items-center justify-center md:justify-between gap-8 md:gap-4 lg:gap-10 xl:gap-16  m-8 md:m-8 2xl:m-56 w-full border border-purple-500'>
                <div id='hero-content' className='md:flex-1 md:w-11/12 w-full border-red-700 border-4'>
                    <p className='block md:hidden'>small</p>
                    <p className='hidden md:block lg:hidden'>medium</p>
                    <p className='hidden lg:block xl:hidden'>large</p>
                    <p className='hidden xl:block 2xl:hidden'>xl</p>
                    <p className='hidden 2xl:block'>2xl</p>
                    <h1
                        className={`mb-7 md:pt-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold whitespace-nowrap text-transparent w-full bg-clip-text   bg-gradient-to-r from-[#e54971] to-[#e2a812] ${spaceMono.className} border border-black`}>&gt;
                        <TypeAnimation
                            className='ml-6 '
                            // sequence={["pwd"]}
                            sequence={["whoissaadia", 1000, "pwd", 1000, "ls", 1000, "echo \"hey\"", 1000]}
                            wrapper='span'
                            speed={20}
                            repeat={Infinity} />
                    </h1>
                    <p className={`w-full xl:w-2/3 2xl:w-5/6 ${averageSans.className} text-xl lg:text-2xl mb-6 border border-black`}>Driven by creativity, innovation and a desire to foster community among the minority groups in the tech industry.</p>
                    <div id='buttons-container' className='flex flex-col md:flex-row gap-4'>
                        <button
                            className='
                                px-6
                                py-2
                                md:w-1/3
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
                             md:w-1/3
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
                            onClick={() => window.open("/files/Saadia_Shahid_Resume.pdf", "_blank")}
                        >
                            Download CV
                        </button>


                    </div>
                </div>
                <div id='hero-image' className='md:flex-1 flex justify-center md:justify-end border-red-700 border-4'>
                    <div className=' relative w-[400px] h-[400px] md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] '>
                        <Image
                            className='object-cover object-top rounded-2xl shadow-md w-full h-full'
                            src="/images/me.jpg"
                            width={400}
                            height={400}
                            alt="Saadia's image"
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection