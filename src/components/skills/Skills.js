import React , {useEffect} from 'react'
import SkillCard from './SkillCard'
import {
    c, cpp, python, html, css, javacript, reactjs, express, mongodb, bootstrap3, opencv, numpy, 
    git, github, vs, heroku, jupyter, pip, npm, tailwind, docker, pandas, matlab,
    typescript, postgresql, mysql, nextjs, nodejs, fastapi, flask, aws, socketio, linux, figma, 
    tensorflow, keras, sklearn, sql, restapi, rabbitmq, powerbi, tableau, ai, neuralnetworks, 
    deeplearning, ml, influxdb
} from '../../assets/index'
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
                <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor duration-1000" data-aos="fade-right">
                    <span className='font-bold mr-10'>Languages & DBs</span>   
                    <span className='mr-3'>C </span><span className='mr-5'><img src={c} alt="C" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>C++ </span><span className='mr-5'><img src={cpp} alt="C++" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Python </span><span className='mr-5'><img src={python} alt="Python" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>JavaScript</span><span className='mr-5'><img src={javacript} alt="JavaScript" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>TypeScript</span><span className='mr-5'><img src={typescript} alt="TypeScript" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>SQL</span><span className='mr-5'><img src={sql} alt="SQL" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>PostgreSQL</span><span className='mr-5'><img src={postgresql} alt="PostgreSQL" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>MySQL</span><span className='mr-5'><img src={mysql} alt="MySQL" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>MongoDB </span><span className='mr-5'><img src={mongodb} alt="MongoDB" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>InfluxDB </span><span className='mr-5'><img src={influxdb} alt="InfluxDB" className="w-6 h-6 object-contain" /></span> 
                </div>
            </div>
            
            <div className='mb-3'>
                <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor duration-1000" data-aos="fade-left">
                    <span className='font-bold mr-10'>Web Development</span>   
                    <span className='mr-3'>Html </span><span className='mr-5'><img src={html} alt="HTML" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Css </span><span className='mr-5'><img src={css} alt="CSS" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>React Js </span><span className='mr-5'><img src={reactjs} alt="React" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Next.js </span><span className='mr-5'><img src={nextjs} alt="Next.js" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Node.js </span><span className='mr-5'><img src={nodejs} alt="Node.js" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Express Js </span><span className='mr-5'><img src={express} alt="Express" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>FastAPI </span><span className='mr-5'><img src={fastapi} alt="FastAPI" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Flask </span><span className='mr-5'><img src={flask} alt="Flask" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>REST APIs </span><span className='mr-5'><img src={restapi} alt="REST API" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Bootstrap </span><span className='mr-5'><img src={bootstrap3} alt="Bootstrap" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Tailwind Css </span><span className='mr-5'><img src={tailwind} alt="Tailwind CSS" className="w-6 h-6 object-contain" /></span> 
                </div>
            </div>

            <div className='mb-3'>
                <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor duration-1000" data-aos="fade-right">
                    <span className='font-bold mr-10'>AI, ML & Data Science</span>   
                    <span className='mr-3'>TensorFlow </span><span className='mr-5'><img src={tensorflow} alt="TensorFlow" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Keras </span><span className='mr-5'><img src={keras} alt="Keras" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Scikit-Learn </span><span className='mr-5'><img src={sklearn} alt="Scikit-Learn" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Machine Learning </span><span className='mr-5'><img src={ai} alt="ML" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Deep Learning </span><span className='mr-5'><img src={ai} alt="Deep Learning" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Neural Networks </span><span className='mr-5'><img src={neuralnetworks} alt="Neural Networks" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>AI / NLP / RAG </span><span className='mr-5'><img src={ai} alt="AI/NLP" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Pandas</span><span className='mr-5'><img src={pandas} alt="Pandas" className="w-6 h-6 object-contain" /></span>
                    <span className='mr-3'>Numpy</span><span className='mr-5'><img src={numpy} alt="Numpy" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>OpenCV </span><span className='mr-5'><img src={opencv} alt="OpenCV" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Matplotlib </span><span className='mr-5'><img src={python} alt="Matplotlib" className="w-6 h-6 object-contain" /></span> 
                </div>
            </div>

            <div className='mb-3'>
                <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-wrap items-center bg-gradient-to-r bg-boxColor group hover:bg-gradient-to-b hover:from-yellowColor duration-1000" data-aos="fade-left">
                    <span className='font-bold mr-10'>Tools & Infrastructure</span>   
                    <span className='mr-3'>Git</span><span className='mr-5'><img src={git} alt="git" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Github</span><span className='mr-5'><img src={github} alt="github" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Linux</span><span className='mr-5'><img src={linux} alt="Linux" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Docker </span><span className='mr-5'><img src={docker} alt="Docker" className="w-6 h-6 object-contain" /></span>
                    <span className='mr-3'>AWS </span><span className='mr-5'><img src={aws} alt="AWS" className="w-6 h-6 object-contain" /></span>
                    <span className='mr-3'>Socket.IO </span><span className='mr-5'><img src={socketio} alt="Socket.IO" className="w-6 h-6 object-contain" /></span>
                    <span className='mr-3'>RabbitMQ </span><span className='mr-5'><img src={rabbitmq} alt="RabbitMQ" className="w-6 h-6 object-contain" /></span>
                    <span className='mr-3'>Figma</span><span className='mr-5'><img src={figma} alt="Figma" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Power BI</span><span className='mr-5'><img src={powerbi} alt="Power BI" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Tableau</span><span className='mr-5'><img src={tableau} alt="Tableau" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Matlab</span><span className='mr-5'><img src={matlab} alt="Matlab" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>npm</span><span className='mr-5'><img src={npm} alt="npm" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>pip</span><span className='mr-5'><img src={pip} alt="pip" className="w-6 h-6 object-contain" /></span> 
                    <span className='mr-3'>Vs Code</span><span className='mr-5'><img src={vs} alt="vscode" className="w-6 h-6 object-contain" /></span>
                </div>
            </div>
        </section>
    )
}

export default Skills
