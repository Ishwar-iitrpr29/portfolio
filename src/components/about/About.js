import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(()=>{
    Aos.init({
      duration: 1000,
      offset: 300
    })
  },[])
  return (
    <section id="about" className="w-full min-h-fit md:min-h-screen pt-10 pb-20 flex flex-col md:flex-row">
  {/* Left Side - Heading */}
  <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 px-4" data-aos="fade-right">
    <h1 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left">
      About <span className="text-yellowColor">Me</span>
    </h1>
  </div>

  {/* Right Side - Details */}
  <div className="w-full md:w-1/2 px-4 md:px-8">
    <div className="border-l-[6px] border-[#1A1A1A] flex flex-col justify-evenly space-y-6">
      {/* Info Items */}
      {[
        ['Name', 'Ishwar Sanjay Amle'],
        ['College', 'Indian Institute Of Technology, Ropar'],
        ['Current Education', 'B.Tech, Pre-final year student'],
        ['Branch', 'Mathematics And Computing'],
        ['Date of Birth', 'November 29, 2004'],
        ['Email Id', '2023mcb1348@iitrpr.ac.in'],
        ['Phone No', '7385107084']
      ].map(([label, value], index) => (
        <div key={index} className="flex items-start gap-2 group">
          <div className="relative w-10 h-[6px] border border-[#1A1A1A] bgOpacity">
            <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#1A1A1A] bg-opacity-60">
              <span className="w-3 h-3 rounded-full bg-[#1A1A1A] group-hover:bg-yellowColor duration-300" />
            </span>
          </div>
          <div className="flex flex-wrap">
            <h2 className="font-bold text-white">{label}:</h2>
            <span className="pl-2 font-medium text-gray-200">{value}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Download CV Button */}
    <div className="w-full mt-10 flex justify-center md:justify-start">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[300px]"
      >
        <div className="w-full h-12 bg-yellowColor text-black flex items-center justify-center rounded-xl text-sm md:text-base font-semibold transition duration-300 hover:bg-yellow-400">
          Download CV
        </div>
      </a>
    </div>
  </div>
</section>

  )
}

export default About
