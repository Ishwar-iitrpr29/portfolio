
import React from 'react'
import { useState } from 'react'
import { MdClose } from "react-icons/md";
import { navLinksdata } from '../../constants'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    const handleLinkClick = () => {
        setShowMenu(false);
    };
    
    return (
        <div className='w-full h-16 md:h-20 mx-auto flex justify-center items-center bg-boxColor sticky top-0 z-50'>
            <div className='w-full px-4 md:px-6 lg:px-0'>
                <ul className='hidden md:flex items-center justify-center gap-6 lg:gap-10'>
                    {
                        navLinksdata.map((navLink) => (
                            <li className="text-sm lg:text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-yellowColor duration-300"
                                key={navLink._id}>
                                <Link
                                    activeClass="active"
                                    to={navLink.link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {navLink.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <span 
                    onClick={() => setShowMenu(!showMenu)} 
                    className="absolute md:hidden top-4 right-4 text-textColor hover:text-yellowColor duration-300 text-2xl cursor-pointer z-60"
                >
                    <FiMenu />
                </span>
                {
                    showMenu && (
                        <>
                            <div 
                                className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
                                onClick={() => setShowMenu(false)}
                            />
                            <div className="fixed top-0 right-0 w-[280px] h-screen bg-boxColor md:hidden z-50 transform transition-transform duration-300 ease-in-out shadow-2xl">
                                <div className="p-6">
                                    <div className="flex justify-end mb-8">
                                        <span
                                            onClick={() => setShowMenu(false)}
                                            className="text-gray-400 hover:text-yellowColor duration-300 text-2xl cursor-pointer"
                                        >
                                            <MdClose />
                                        </span>
                                    </div>
                                    <ul className='flex flex-col gap-6'>
                                        {
                                            navLinksdata.map((navLink) => (
                                                <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-yellowColor duration-300 py-2 border-b border-gray-700"
                                                    key={navLink._id}>
                                                    <Link
                                                        activeClass="active"
                                                        to={navLink.link}
                                                        spy={true}
                                                        smooth={true}
                                                        offset={-70}
                                                        duration={500}
                                                        onClick={handleLinkClick}
                                                    >
                                                        {navLink.title}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar