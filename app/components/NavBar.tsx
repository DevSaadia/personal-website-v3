import Link from 'next/link'
import path from 'path'
import React from 'react'
import NavLink from './NavLink'

const NavBar = () => {
  const navLinks = [
    {
      title: "Home",
      path: "#hero-section",
    }, {
      title: "About",
      path: "#about-section",
    }, {
      title: "Projects",
      path: "#projects-section",
    }]
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-100'>
      <div className='flex justify-center md:justify-between items-center mx-auto py-2 px-4 md:px-24'>
        <Link href='#hero-section'
          className='text-2xl whitespace-nowrap text-[#e54971] font-semibold'>Saadia Shahid</Link>
        <div className='menu hidden md:block md:w-auto'>

          {/* <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul> */}
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
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