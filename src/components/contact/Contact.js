
import React, {useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'
import {Link, BrowserRouter} from 'react-router-dom';

import emailjs from 'emailjs-com';

const Contact = () => {

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    useEffect(()=>{
        Aos.init({
          duration: 1000,
          offset: 180
        })
      },[])


    const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
        setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
        setErrMsg("Phone number is required!");
    } else if (email === "") {
        setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
        setErrMsg("Give a valid Email!");
    } else if (message === "") {
        setErrMsg("Message is required!");
    } else {
        // Send email using EmailJS
        emailjs.send(
            'Ish_war',      // Replace with your EmailJS service ID
            'template_jc4dlpr',     // Replace with your EmailJS template ID
            {
                from_name: username,
                from_phone: phoneNumber,
                from_email: email,
                message: message,
                to_email: "ishwaramle5@gmail.com", // Optional, if your template uses it
            },
            'uoA8v_5eyZR5sJdo2'       // Replace with your EmailJS public key
        ).then(
            (result) => {
                setSuccessMsg(
                    `Thank you dear ${username}, Your Message has been sent Successfully!`
                );
                setErrMsg("");
                setUsername("");
                setPhoneNumber("");
                setEmail("");
                setMessage("");
            },
            (error) => {
                console.log(error);
                setErrMsg("Failed to send message. Please try again later.");
            }
        );
    }
};


    return (
        <section id="contact" className='w-full py-10 border-b-[1px] border-b-black'>
            <div className='flex items-center justify-center text-center'>
                <div className="flex flex-col gap-4 font-titleFont mb-14">
                    <h3 className="text-sm uppercase font-light text-designColor tracking-wide" data-aos="fade-down">
                        Contact Me
                    </h3>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-300 font-bold capitalize px-4" data-aos="fade-down"><span className='text-yellowColor capitalize' >Contact</span> Me</h1>
                </div>
            </div>
            <div className='w-full h-auto flex flex-col lg:flex-row lg:justify-center px-4 md:px-6 lg:px-0'>
                <div className='w-full lg:w-1/2 flex flex-col items-center justify-center mb-10 lg:mb-0'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center lg:text-left mb-6 lg:mb-10' data-aos="fade-right">Get In <span className='text-yellowColor capitalize'>Touch</span></h1>
                    <div>
                    <BrowserRouter>
                        <div className="flex gap-4 justify-center">
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
                <div className="w-full lg:w-1/2 xl:w-[60%] h-full py-6 lg:py-10 bg-boxColor flex flex-col gap-6 lg:gap-8 p-4 lg:p-8 rounded-lg">
                    <form className='w-full flex flex-col gap-4 lg:gap-6 py-2'>
                        {
                            errMsg &&  <p className='py-3 bg-gradient-to-r bg-yellowColor rounded-xl text-center text-[#1A1A1A] text-sm lg:text-base tracking-wide animate-bounce'>{errMsg}</p>
                        }
                        
                        <div className='w-full flex flex-col md:flex-row gap-4 md:gap-10'>
                            <div className='w-full md:w-1/2 flex flex-col gap-4'>
                                <p className='text-xs md:text-sm uppercase tracking-wide'>Your Name</p>
                                <input onChange={(e) => setUsername(e.target.value)} value={username} className={`${errMsg == 'Username is required!' && 'outlined-yellowColor'} contactInput`} type="text" />
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col gap-4'>
                                <p className='text-xs md:text-sm uppercase tracking-wide'>Phone No</p>
                                <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className='contactInput' type="text" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-xs md:text-sm uppercase tracking-wide'>Email</p>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className='contactInput' type="text" />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-xs md:text-sm uppercase tracking-wide'>Message</p>
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='contactTextArea' cols="30" rows="5" placeholder='Write Something'></textarea>
                        </div>
                        <div className='w-full md:w-[50%] xl:w-[30%]'>
                            <button onClick={handleSend} className='contactInput w-full'>Submit</button>
                        </div>
                        {
                            successMsg && <p className='text-sm lg:text-base text-green-400'>{successMsg}</p>
                        }
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact