import Link from 'next/link'
import path from 'path'
import React from 'react'
import NavLink from './NavLink'
import { jetBrainsMono, spaceMono } from '../styles/fonts'
const NavBar = () => {
  const navLinks = [
    {
      title: "home",
      path: "#hero-section",
    }, {
      title: "about",
      path: "#about-section",
    }, {
      title: "projects",
      path: "#projects-section",
    }]
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-100'>
      <div className={` ${spaceMono.className} flex justify-center md:justify-between items-center mx-8 md:mx-24 2xl:mx-56 py-6`}>
        <Link href='#hero-section'
          className='text-4xl whitespace-nowrap text-[#e54971] font-bold '>saadia shahid</Link>
        <div className='menu hidden md:block md:w-auto'>

          {/* <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul> */}
          <ul className="flex text-xl p-4 md:p-0 md:flex-row md:space-x-8 mt-0 font-semibold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar