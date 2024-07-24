"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { spaceMono, averageSans } from '../styles/fonts';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section
            id='hero-section'
            className='bg-[#ffe8e2] h-screen  flex items-center border border-black'>
            <div className='flex items-center justify-between gap-96 p-24 w-full border border-black'>
                <div id='hero-content' className='flex-1 border border-black'>
                    <h1
                        className={`mb-7 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e54971] to-[#e2a812] ${spaceMono.className}`}>&gt;
                        <TypeAnimation
                            className='ml-6 '
                            sequence={["whoissaadia", 1000, "pwd", 1000, "ls", 1000]}
                            wrapper='span'
                            speed={20}
                            repeat={Infinity} />
                    </h1>
                    <p className={`w-96 ${averageSans.className} text-xl mb-6`}>Driven by creativity, innovation and a desire to foster community among the minority groups in the tech industry.</p>
                    <div id='buttons-container' className='flex flex-row gap-4'>
                        <button
                            className='        
                                px-6
                                py-1 
                                w-full
                                rounded-full
                                bg-[#e54971]
                              text-white 
                                 mt-3
                                 '>
                            Hire Me
                        </button>
                        <button className='px-1 py-1 w-full rounded-full bg-[#e54971] hover:bg-[#b23554] text-white mt-3'>
                            <span className='block bg-[#ffe8e2] hover:bg-white rounded-full px-5 py-2 text-[#e54971]'>Download CV</span></button>
                    </div>
                </div>
                <div id='hero-image' className='flex-1 flex justify-end rounded-2xl w-[250px] h-[250px] border border-black'>
                    <Image
                        className='absolute transform object-cover rounded-2xl '
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