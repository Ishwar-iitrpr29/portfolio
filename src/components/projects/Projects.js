import React, {useEffect} from 'react'
import ProjectsCard from './ProjectsCard'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { hms, riscv_img, cbir, morphing, boha, lzw, task_manager_api, compiler, eertree, Clinintel, adobe, devrev, gomory, social, iot } from '../../assets/index'
const Projects = () => {

    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 180
        })
      },[])

    return (
        <div>
            <section id="projects" className='w-full py-10 border-b-[1px] border-b-black'>
                <div className='flex items-center justify-center text-center'>
                    <div className="flex flex-col gap-4 font-titleFont mb-14">
                        <h3 className="text-sm uppercase font-light text-designColor tracking-wide" data-aos="fade-down">
                            My Projects
                        </h3>
                        <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize" data-aos="fade-down"><span className='text-yellowColor capitalize'>My</span> Projects</h1>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14'>
                    <ProjectsCard
                        title="CLININTEL"
                        des="The Hospital Management System is a responsive and user-friendly web application designed to streamline hospital operations with real-life applicability. Built with a modern tech stack, it efficiently stores and manages all essential data while offering a clean, intuitive UI for smooth user interaction. The system ensures fast performance, scalability, and practical utility for real-world healthcare needs."
                        tech = "Teack Stack: HTML, JavaScript, Tailwind CSS, React (Vite),Nodejs, MongoDB."
                        src={Clinintel}
                        github_link= "https://github.com/Sudhanshu230310/Hospital-Management"
                    />
                    <ProjectsCard
                        title="QuadCompression"
                        des="QuadCompression is a high-performance image compression and analysis system designed to drastically reduce image storage requirements—achieving up to 98% compression based on configurable iterations. The project uses a modified QuadTree data structure along with custom binary file manipulation to encode and decode images efficiently.
                            It enables lightweight image storage without significant quality loss, making it ideal for applications where storage optimization is critical."
                        tech = "Tech Stack: Python, Data Structures & Algorithms, LZMA, NumPy, Pillow, io, OOPs."
                        src={adobe}
                        github_link= "https://github.com/Ishwar-iitrpr29/Quad_Compression"
                    />
                    <ProjectsCard
                        title="MyEBank"
                        des="MyEBank is a secure and interactive banking Structure that simulates core financial operations like account handling, encrypted transactions, and activity tracking. It leverages advanced data structures such as B-Trees and Doubly Linked Lists, and implements RSA encryption with modular exponentiation for secure operations."
                        tech = "Tech Stack: C++, DSA, OOPs, RSA Algorithm."
                        src={gomory}
                        github_link= "https://github.com/Ishwar-iitrpr29/MyEBank"
                    />
                    <ProjectsCard
                        title="TrackForces"
                        des="Developed TrackForces, a web-based analytics tool using HTML, CSS, and JavaScript integrated with the Codeforces API. Enabled detailed analysis and comparison of Codeforces user profiles through interactive charts and statistics. Implemented a unique feature to simulate virtual contests among any set of users. Focused on real-time data manipulation and clean UI for enhanced user experience."
                        tech = "Tech Stack: HTML, CSS, JavaScript, CodeForces API"
                        src={boha}
                        github_link= "https://github.com/Ishwar-iitrpr29/Codeforces_Analysis_API"
                    />

                </div>
            </section>
        </div>
    )
}

export default Projects
