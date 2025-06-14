import React , {useEffect} from 'react'
import SkillCard from './SkillCard'
import {c, cpp, python, html, css, javacript, reactjs, express, mongodb, bootstrap3, opencv, numpy, git, github,vs,heroku,jupyter,pip,npm, tailwind,docker,pandas,matlab} from '../../assets/index'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 160
        })
      },[])
    return (
        <section id="skills" className='w-full py-10 border-b-[1px] border-b-black'>
            <div className='flex items-center justify-center text-center'>
                <div className="flex flex-col gap-4 font-titleFont mb-14">
                    <h3 className="text-sm uppercase font-light text-designColor tracking-wide" data-aos="fade-down">
                        My Skills
                    </h3>
                    <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize" data-aos="fade-down"><span className='text-yellowColor capitalize'>My</span> Skills</h1>
                </div>
            </div>
            <div className='mb-3'>
                <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex  flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor   duration-1000" data-aos="fade-right">
                    <span className='font-bold mr-10'>Programming Languages</span>   
                    <span className='mr-3'>C </span><span className='mr-5'><img src={c} alt="C" /></span> 
                    <span className='mr-3'>C++ </span><span className='mr-5'><img src={cpp} alt="C" /></span> 
                    <span className='mr-3'>Python </span><span className='mr-5'><img src={python} alt="C" /></span> 
                </div>
            </div>
            <div className='mb-3'>
            <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor   duration-1000" data-aos="fade-left">
                    <span className='font-bold mr-10'>Web Development</span>   
                    <span className='mr-3'>Html </span><span className='mr-5'><img src={html} alt="C" /></span> 
                    <span className='mr-3'>Css </span><span className='mr-5'><img src={css} alt="C" /></span> 
                    <span className='mr-3'>Javascript</span><span className='mr-5'><img src={javacript} alt="C" /></span> 
                    <span className='mr-3'>React Js </span><span className='mr-5'><img src={reactjs} alt="C" /></span> 
                    <span className='mr-3'>Express Js </span><span className='mr-5'><img src={express} alt="C" /></span> 
                    <span className='mr-3'>MongoDB </span><span className='mr-5'><img src={mongodb} alt="C" /></span> 
                    <span className='mr-3'>Bootstrap </span><span className='mr-5'><img src={bootstrap3} alt="C" /></span> 
                    <span className='mr-3'>Tailwind Css </span><span className='mr-5'><img src={tailwind} alt="C" /></span> 
                </div>
            </div>
            <div className='mb-3'>
            <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex  flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor   duration-1000" data-aos="fade-left">
                    <span className='font-bold mr-10'>Tools</span>   
                    <span className='mr-3'>Git</span><span className='mr-5'><img src={git} alt="git" /></span> 
                    <span className='mr-3'>Github</span><span className='mr-5'><img src={github} alt="git" /></span> 
                    <span className='mr-3'>Vs Code</span><span className='mr-5'><img src={vs} alt="git" /></span>
                    <span className='mr-3'>Docker </span><span className='mr-5'><img src={docker} alt="C" /></span>
                    <span className='mr-3'>Matlab</span><span className='mr-5'><img src={matlab} alt="C" /></span> 
                    <span className='mr-3'>npm</span><span className='mr-5'><img src={npm} alt="git" /></span> 
                    <span className='mr-3'>pip</span><span className='mr-5'><img src={pip} alt="git" /></span> 
                </div>
            </div>
            <div className='mb-3'>
                <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex  flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor   duration-1000" data-aos="fade-right">
                    <span className='font-bold mr-10'>Libraries</span>
                    <span className='mr-3'>Matplotlib </span><span className='mr-5'><img src={python} alt="C" /></span> 
                    <span className='mr-3'>Numpy</span><span className='mr-5'><img src={numpy} alt="C" /></span> 
                    <span className='mr-3'>Pandas</span><span className='mr-5'><img src={pandas} alt="C" /></span>
                    <span className='mr-3'>OpenCV </span><span className='mr-5'><img src={opencv} alt="C" /></span> 
                </div>
            </div>
        </section>
    )
}

export default Skills
