"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { spaceMono, averageSans } from '../styles/fonts';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

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
            <div
                className='
                    flex 
                    flex-col-reverse  
                    md:flex-row 
                    items-center 
                    justify-center 
                    md:justify-between 
                    gap-8 
                    md:gap-4 
                    lg:gap-10 
                    xl:gap-16  
                    m-8 
                    md:m-24 
                    2xl:m-56 
                    w-full '
            >
                <div id='hero-content' className='md:flex-1 md:w-11/12 w-full'>
                    {/* <p className='hidden xs:block sm:hidden'>extra small</p>
                    <p className='block md:hidden'>small</p>
                    <p className='hidden md:block lg:hidden'>medium</p>
                    <p className='hidden lg:block xl:hidden'>large</p>
                    <p className='hidden xl:block 2xl:hidden'>xl</p>
                    <p className='hidden 2xl:block'>2xl</p> */}
                    <h1
                        className={`
                        mb-7 
                        md:pt-2 
                        text-3xl  
                        md:text-4xl 
                        lg:text-5xl 
                        xl:text-6xl 
                        font-extrabold 
                        whitespace-nowrap 
                        text-transparent
                        w-auto inline-block  
                        bg-clip-text   
                        bg-gradient-to-r 
                        from-[#e54971] 
                        to-[#e2a812] 
                        ${spaceMono.className} 
                         `}>&gt;
                        <TypeAnimation
                            className='ml-6 '
                            sequence={["whoissaadia", 1000, "pwd", 1000, "ls", 1000, "echo \"hey\"", 1000]}
                            wrapper='span'
                            speed={20}
                            repeat={Infinity} />
                    </h1>
                    <p className={`
                        w-full 
                        text-black 
                        xl:w-2/3 
                        2xl:w-5/6 
                        ${averageSans.className} 
                        text-xl 
                        lg:text-2xl 
                        2xl:text-[32px]
                        mb-6 `}>
                        Driven by creativity, innovation and a desire to foster community among the minority groups in the tech industry.</p>
                    <div
                        id='buttons-container'
                        className='flex flex-col md:flex-row  gap-4'>
                        <Button
                            startContent={<EnvelopeIcon className='w-6 h-6' />}
                            radius='full'
                            size='lg'
                            className='text-white bg-[#e54971] '
                            onClick={() => window.open("mailto:saadia.shahid@torontomu.ca?subject=Hello Saadia&body=Hi...", "_blank")}
                        >
                            Say Hello
                        </Button>
                        <Button
                            // startContent={<DocumentTextIcon className='w-6 h-6' />}
                            radius='full'
                            variant='bordered'
                            size='lg'
                            className='text-[#e54971] border-4 border-[#e54971] hover:bg-white '
                            onClick={() => window.open("/files/Saadia_Shahid_Resume.pdf", "_blank")}
                        >
                            View Resume
                        </Button>
                    </div>
                </div>
                <div
                    id='hero-image'
                    className='
                        md:flex-1 
                        w-full 
                        h-full 
                        flex 
                        justify-center 
                        md:justify-end '
                >
                    <div
                        className=' 
                            relative 
                            w-full 
                            h-[300px] 
                            md:w-[300px] 
                            md:h-[300px] 
                            lg:w-[400px] 
                            lg:h-[400px] 
                            xl:w-[500px] 
                            xl:h-[500px] '
                    >
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