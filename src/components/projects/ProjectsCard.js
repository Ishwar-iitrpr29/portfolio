import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

const ProjectsCard = ({ title, des, tech, src, github_link }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-full min-h-[550px] xl:py-10 rounded-lg flex flex-col bg-boxColor group">
      {/* Image */}
      <div className="w-full h-[240px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="Project"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow mt-5">
        {/* Title */}
        <h3 className="font-bold text-lg mt-2 hover:text-yellowColor">{title}</h3>

        {/* Description */}
        <div className="mt-4 flex flex-col justify-between flex-grow">
          <p className="text-sm tracking-wide text-gray-300 mb-3">{des}</p>
          <p className="text-sm tracking-wide text-yellow-100">{tech}</p>
        </div>

        {/* Icons */}
        <div className="flex gap-2 mt-4">
          <a href={github_link} target="_blank" rel="noopener noreferrer">
            <span className="text-lg w-10 h-10 rounded-full bg-black group-hover:bg-[#1A1A1A] inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              <BsGithub />
            </span>
          </a>
          <span className="text-lg w-10 h-10 rounded-full bg-black group-hover:bg-[#1A1A1A] inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <FaGlobe />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
