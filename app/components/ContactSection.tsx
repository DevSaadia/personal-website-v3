import React from 'react'
import { spaceMono } from '../styles/fonts'
import Form from './Form';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';
import { averageSans } from '../styles/fonts';
import socials from '../data/socials.json';
import Link from 'next/link';


const ContactSection = () => {
    const iconMap: { [key: string]: JSX.Element } = {
        LinkedInIcon: <LinkedInIcon />,
        GitHubIcon: <GitHubIcon />,
        Email: <Email />
    };


    return (
        <section
            id='contact-section'
            className='
      bg-[#e85f82] 
      flex items-center 
      h-1/4
    '>
            <div className='
              w-full
      flex  
      gap-8 
      mx-8
      my-16 
      md:mx-24 
      2xl:mx-56 
      flex-col'>
                <h1
                    className={`mb-7 
                        whitespace-nowrap
                        text-4xl 
                        md:text-4xl 
                        lg:text-5xl 
                        xl:text-6xl 
                        font-extrabold 
                        text-transparent  

                        inline-block
                        w-max
                        bg-clip-text  
                        bg-gradient-to-r 
                        from-[#ffffff] 
                        to-[#e2a812] 
                        ${spaceMono.className}
                        `}>
                    &gt;
                    contact
                </h1>
                <div
                    id="contact-body"
                    className={`
                        flex 
                        ${averageSans.className}
                        text-xl
                        flex-col
                        md:flex-row
                        justify-between
                        gap-4 
                        w-full`}
                >
                    <div id='contact-info' className={` ${averageSans.className}  text-white sm:w-full md:w-1/2 lg:w-1/3`}>
                        <p>Connect with me or shoot me a message!<br />I&apos;ll get back to you soon as I can.</p>
                        <div id='social-icons' className='py-4 gap-6  flex'>
                            {socials.map((social: any, index: React.Key | null | undefined) => (
                                <Link
                                    key={index}
                                    href={social.url}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className=' hover:scale-125 transition duration-300 ease-out'
                                >
                                    {iconMap[social.icon]}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-1/3'>
                        <Form
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection