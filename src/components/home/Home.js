import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { Ishwar } from '../../assets/index'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
const Home = () => {

    const [text] = useTypewriter({
        words: ["Competitive Coder.", "Full Stack Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <section id="home" className='w-full pt-10 pb-20 flex flex-col lgl:flex-row border-b-[1px] border-b-black'>
            {/* <div className='w-1/2 border'>
                <div className='p-20'>
                    <img src={Ishwar} alt="Ishwar" className='rounded-xl'/>
                </div>
            </div> */}
            <div className='w-full lgl:w-1/2 flex justify-center items-center'>
                <img
                className='w-40 h-40 md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[600px] z-10 rounded-full -mt-6 md:-mt-12 object-cover shadow-lg'
                src={Ishwar}
                alt="My Image"
            />
            </div>
            <div className='w-full lgl:w-1/2 flex flex-col gap-20 '>
                <div className='flex flex-col gap-5 items-center justify-center lgl:items-start'>
                    {/* <h4 className='text-lg font-normal'>Welcome to my world</h4> */}
                    <h1 className='text-6xl font-bold text-white mt-20'>
                        Hi, I'm
                        <span className='text-yellowColor capitalize'> Ishwar</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>a {" "}
                        <span>
                            {text}
                        </span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#FFBD39"
                        />
                    </h2>
                    <p className='text-base font-bodyFont leading-6 tracking-wide'>
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum animi voluptates inventore velit quod cupiditate alias delectus eaque dolor, eius incidunt quam neque eum iste commodi quo est maiores maxime! */}
                        I like to do web development and solve complex problems. I am always enthusiastic about learning new things and working on exciting projects. I like to face new challenges and embrace opportunities that come my way. I’m also passionate about AI/ML and exploring its real-world applications.
                    </p>
                </div>
                <div className='flex flex-col items-center lgl:items-start'>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Connect with me
                    </h2>
                    <BrowserRouter>
                        <div className="flex gap-4">
                            <Link to="https://www.linkedin.com/in/ishwar-amle-3a6a29294/">
                                <span className="homeIcon bg-boxColor">
                                    <FaLinkedinIn />

                                </span>
                            </Link>
                            <Link to="https://github.com/Ishwar-iitrpr29/">
                                <span className="homeIcon bg-boxColor">
                                    <FaGithub />
                                </span>
                            </Link>
                            <Link to="https://www.instagram.com/ishwar29_iitrpr/">
                                <span className="homeIcon bg-boxColor">
                                    <FaInstagram />
                                </span>
                            </Link>

                        </div>
                    </BrowserRouter>
                </div>
            </div>
        </section>
    )
}

export default Home