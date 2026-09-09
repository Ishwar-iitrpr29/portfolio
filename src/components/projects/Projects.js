import React, {useEffect} from 'react'
import ProjectsCard from './ProjectsCard'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { 
    Clinintel, adobe, gomory, boha,
    college_community, intellichat, speech_emotion, chess, 
    finance_dashboard, sentiment_analyzer, stock_market, market_analytics 
} from '../../assets/index'

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
                        title="College-Community-Platform"
                        des="Built a full-stack React-Flask platform with JWT/OTP authentication, real-time group chat, Cloudinary-backed study materials, and placement tracking. Developed a RAG-based AI Tutor using Gemini and Pinecone for semantic search over 768-D PDF embeddings, and deployed an RL-based MDP recommendation engine to rank notifications."
                        tech = "Tech Stack: Flask, React, SQLAlchemy, PostgreSQL, JWT, GenAI, Custom RL."
                        src={college_community}
                        github_link= "https://github.com/Ishwar-iitrpr29"
                    />
                    <ProjectsCard
                        title="IntelliChat - Real Time Chat App"
                        des="Built a scalable 3-service microservices chat platform with 20+ REST APIs, real-time WebSocket communication, Cloudinary media sharing, and AWS EC2 backend deployment. Implemented passwordless OTP authentication with Redis caching, RabbitMQ-based asynchronous emails, Google Gemini AI chatbot, and browser-side E2E encryption."
                        tech = "Tech Stack: Next.js, Node.js, Socket.io, MongoDB, Redis, RabbitMQ, AWS."
                        src={intellichat}
                        github_link= "https://github.com/Ishwar-iitrpr29"
                    />
                    <ProjectsCard
                        title="Quad-Tree Image Compression"
                        des="Engineered a lossy image compression pipeline using recursive QuadTree decomposition, custom bit-level encoding, and LZMA serialization, achieving 80–95% file size reduction with quality and performance benchmarking."
                        tech = "Tech Stack: DSA, Python, NumPy, Pillow, LZMA, QuadTree."
                        src={adobe}
                        github_link= "https://github.com/Ishwar-iitrpr29/Quad_Compression"
                    />
                    <ProjectsCard
                        title="Speech Emotion Recognition"
                        des="Built a Speech Emotion Recognition pipeline using frozen Wav2Vec2 embeddings, Mean+Std temporal pooling, and an MLP classifier with 1536-D acoustic features. Applied Gaussian noise augmentation and combined RAVDESS/CREMA-D training to reduce domain shift, achieving 85.20% accuracy."
                        tech = "Tech Stack: Python, Machine Learning, Wav2Vec2, Librosa, Scikit-learn."
                        src={speech_emotion}
                        github_link= "https://github.com/Ishwar-iitrpr29"
                    />
                    <ProjectsCard
                        title="Real-time Sentiment Analyzer"
                        des="Developed an NLP-based sentiment analysis application using VADER, NLTK, and Scikit-learn to classify text into 3 sentiment classes with 4 polarity metrics. Developed a Flask-based real-time inference pipeline with automated text preprocessing and stopword removal, exposing sentiment predictions through a web interface."
                        tech = "Tech Stack: Python, NLP, Scikit-learn, VADER, Flask, Machine Learning."
                        src={sentiment_analyzer}
                        github_link= "https://github.com/Ishwar-iitrpr29"
                    />
                    <ProjectsCard
                        title="Finance & Project Performance Analytics Dashboard"
                        des="Developed a Power BI dashboard analyzing 99+ projects across 5 fiscal years to track income generation, cost reduction, and working capital for data-driven financial planning. Built 10+ interactive visuals for fiscal-year analysis of project costs, benefits, and completion rates."
                        tech = "Tech Stack: Power BI, DAX, Excel, Data Analytics."
                        src={finance_dashboard}
                        github_link= "https://github.com/Ishwar-iitrpr29"
                    />
                    <ProjectsCard
                        title="Financial Market Analytics Dashboard"
                        des="Designed an end-to-end pipeline processing 5 years of daily market data for 5 tech stocks and the S&P 500, engineering annualized volatility and returns into 10+ interactive Tableau and Streamlit dashboards."
                        tech = "Tech Stack: Python, SQL, PostgreSQL, Tableau, Streamlit."
                        src={market_analytics}
                        github_link= "https://github.com/Ishwar-iitrpr29"
                    />
                    <ProjectsCard
                        title="Bank Stock Market & Risk Analytics"
                        des="Analyzed 12 years of historical stock data for 6 major US banks using Python, calculating 30-day moving averages and standard deviation-based volatility to construct 15+ risk and market trend visualizations."
                        tech = "Tech Stack: Python, Pandas, NumPy, Seaborn, Yahoo Finance."
                        src={stock_market}
                        github_link= "https://github.com/Ishwar-iitrpr29"
                    />
                    <ProjectsCard
                        title="Multiplayer Chess Game"
                        des="Developed a fully functional multiplayer Chess game in C++ using OOP principles, implementing 6 chess pieces with inheritance and rules including check, illegal moves, castling, and pawn promotion."
                        tech = "Tech Stack: C++, Object Oriented Programming."
                        src={chess}
                        github_link= "https://github.com/Ishwar-iitrpr29"
                    />
                    <ProjectsCard
                        title="CLININTEL"
                        des="The Hospital Management System is a responsive and user-friendly web application designed to streamline hospital operations with real-life applicability. Built with a modern tech stack, it efficiently stores and manages all essential data while offering a clean, intuitive UI for smooth user interaction. The system ensures fast performance, scalability, and practical utility for real-world healthcare needs."
                        tech = "Tech Stack: HTML, JavaScript, Tailwind CSS, React (Vite), Nodejs, MongoDB."
                        src={Clinintel}
                        github_link= "https://github.com/Sudhanshu230310/Hospital-Management"
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
                        tech = "Tech Stack: HTML, CSS, JavaScript, CodeForces API."
                        src={boha}
                        github_link= "https://github.com/Ishwar-iitrpr29/Codeforces_Analysis_API"
                    />
                </div>
            </section>
        </div>
    )
}

export default Projects
