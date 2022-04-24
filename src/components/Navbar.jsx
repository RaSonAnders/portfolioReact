import React from 'react'
import { useState } from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';
  import Logo from '../assets/logo.png';



function Navbar() {
    const [nav, setNav]= useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="" className='h-[50px]'/>
        </div>
  
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        
        <div onClick={handleClick} className='md:hidden z-10'>
            
            { !nav ? <FaBars /> : <FaTimes/>}
        </div>
        <ul className={!nav ? 'hidden duration-300' : 'duration-300 absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] flex items-center h-[60px] justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex text-gray-300 w-full items-center justify-between' href="">
                        Linkedin <FaLinkedin size={30}/></a></li>
                <li className='w-[160px] flex items-center h-[60px] justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex text-gray-300 w-full items-center justify-between' href="">
                        Github <FaGithub size={30}/></a></li>
                <li className='w-[160px] flex items-center h-[60px] justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00b8d4]'>
                    <a className='flex text-gray-300 w-full items-center justify-between' href="">
                        Email <HiOutlineMail size={30}/></a></li>
                <li className='w-[160px] flex items-center h-[60px] justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex text-gray-300 w-full items-center justify-between' href="">
                        Resume <BsFillPersonLinesFill size={30}/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar