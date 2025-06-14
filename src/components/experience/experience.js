
import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
    
    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 180
        })
      },[])

    return (
        <section id="experience" className='w-full py-10 border-b-[1px] border-b-black'>
            <div className='flex items-center justify-center text-center'>
                <div className="flex flex-col gap-4 font-titleFont mb-14">
                    <h3 className="text-sm uppercase font-light text-designColor tracking-wide" data-aos="fade-down">
                        My Experience
                    </h3>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold capitalize px-4" data-aos="fade-down"><span className='text-yellowColor capitalize'>My </span>Experience</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 px-4 md:px-6 lg:px-0" >
                <div className='h-auto bg-boxColor rounded-md' data-aos="fade-right">
                    <div className='flex justify-center items-center my-3 px-2'>
                        <span className='font-bold hover:text-yellowColor text-center text-sm md:text-base'>Club Secretory</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-4 md:mx-10 my-3 py-4 text-sm md:text-base'>
                    As the Club Secretary of the Fine Arts Club at IIT Ropar, I was responsible for managing event budgets, coordinating with institute administration for approvals, and overseeing all club activities. My role involved planning and supervising events, ensuring smooth execution, and fostering creative engagement within the campus art community.
                    </div>
                </div>
                <div className='h-auto bg-boxColor rounded-md' data-aos="fade-left">
                    <div className='flex justify-center items-center my-3 px-2'>
                        <span className='font-bold hover:text-yellowColor text-center text-sm md:text-base'>Zeitgeist-CultFest 2024</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-4 md:mx-10 my-3 py-4 text-sm md:text-base'>
                    As a Co-Head in Zeitgeist 2024, the annual cultural fest of IIT Ropar, I successfully led the planning and execution of 5 diverse events under my charge. My responsibilities included end-to-end event management, coordination with teams, and ensuring smooth on-ground operations. I also contributed to increasing participant engagement through effective social media outreach and promotional strategies.
                    </div>
                </div>
                <div className='h-auto bg-boxColor rounded-md' data-aos="fade-right">
                    <div className='flex justify-center items-center my-3 px-2'>
                        <span className='font-bold hover:text-yellowColor text-center text-sm md:text-base'>Representative</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-4 md:mx-10 my-3 py-4 text-sm md:text-base'>
                    As the Club Representative of the Fine Arts Club at IIT Ropar, I actively contributed to organizing and managing various artistic events and workshops. The role enhanced my leadership and team coordination skills, as I facilitated smooth execution of club activities while encouraging student participation and creativity across campus.
                    </div>
                </div>
                <div className='h-auto bg-boxColor rounded-md' data-aos="fade-left">
                    <div className='flex justify-center items-center my-3 px-2 hover:text-yellowColor'>
                        <span className='font-bold text-center text-sm md:text-base'>Advitiya -Techfest 2024</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-4 md:mx-10 my-3 py-4 text-sm md:text-base'>
                    As a member of the Advitiya Outreach & Tech Team, I manage websites and Social Media handle of all the technical aspects for various student bodies in our college. This involves regularly updating and providing all the necessary information, including event details, announcements, and resources, to ensure accurate and up-to-date content.
                    </div>
                </div>
                    <div className='h-auto bg-boxColor rounded-md' data-aos="fade-left">
                    <div className='flex justify-center items-center my-3 px-2'>
                        <span className='font-bold hover:text-yellowColor text-center text-sm md:text-base'>Inter IIT-Cult meet 7.0</span>
                    </div>
                    <div className='px-2 bg-[#292828] rounded-md mx-4 md:mx-10 my-3 py-4 text-sm md:text-base'>
                    Represented IIT Ropar at Inter IIT Cultural Meet 7.0 held at IIT Patna in December 2024, where I secured 6th position in the Charcoal Digital Art event. It was a great experience to compete with talented individuals from across IITs, engage in creative exchange, and build meaningful connections through art and collaboration.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience