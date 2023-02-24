import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import {BiMapAlt} from 'react-icons/bi';
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className=' bg-cyan-100 w-[100%] h-[100vh] flex flex-col font-extrabold sm:pt-8 sm:h-[100vh]'>
        <div className='flex flex-col sm:flex-row sm:w-[80%]  sm:mx-auto sm:justify-center sm:mb-8 sm:pb-8'>
            <div className='w-full sm:flex sm:flex-row sm:justify-around sm:w-[53%]'>
                <div className=' flex flex-col w-full sm:w-[100%] sm:justify-between sm:h-[35vh] sm:text-left'>
                    <div className='w-[100%] flex justify-center mt-2 sm:w-[50%] '>
                        <img className=' w-[100%] flex justify-center sm:w-[100%]' src={require('../image/logo.png')} alt="" />
                    </div>
                    <div className='flex flex-row justify-center w-full mt-4 sm:w-[66%] sm:mt-16'>
                        <span className='sm:w-[15%] text-[2rem] text-cyan-400 mr-2 sm:text-[2.8rem] sm:h-fill'><BiMapAlt/></span>
                        <p className=" max-w-full sm:w-[75%] text-left sm:leading-[1.8] sm:font-semibold  sm:flex sm:justify-center sm:flex-col">
                        Meraqui Ventures Pvt. Ltd., 
Pranik Chambers, B-125, 1st Floor, Saki Vihar Road, 
Sakinaka, Andheri (E), Mumbai – 400072, India<br />
                        <br />
                            +91-9560772719
                        </p>
                    </div>
                    <div className='flex flex-row justify-center w-full sm:w-[100%] sm:mt-12 mt-8'>
                        <span className='sm:w-[10%] text-[2rem] text-cyan-400 mr-2 mb-2 sm:text-[2.8rem] sm:h-fill'><AiTwotoneMail/></span>
                        <a className='sm:font-semibold sm:w-[85%] sm:h-[5vh] sm:flex sm:flex-col sm:justify-center sm:text-left' href="meraqui.ventures@gmail.com">contact@meraqui.com</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-row mt-8 justify-evenly  font-normal sm:w-[85%] sm:mt-12'>
                <div className='w-[30%] '>
                    <div className='w-[100%] sm:w-[60%] sm:flex sm:flex-col sm:justify-center' >
                        <h3 className='w-fit ml-4  border-b-[3px] border-cyan-500 sm:text-[1.3rem]'>Quick Links</h3>
                        <ul className=" flex flex-col justify-evenly h-56 font-sans sm:text-left sm:ml-4">
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/industries">Industries</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <div className='w-[100%] sm:w-[60%] sm:flex sm:flex-col sm:justify-center' >
                        <h3 className='w-fit ml-4  border-b-[3px] border-cyan-500 sm:text-[1.3rem]'>Services</h3>
                        <ul className=" flex flex-col justify-evenly h-56 font-sans sm:text-left sm:ml-4 ">
                            <li><Link to="/ts">TEMP-STAFFING</Link></li>
                            <li><Link to="/naps">NAPS</Link></li>
                            <li><Link to="/pe">PERM-STAFFING</Link></li>
                            <li><Link to="/neem">NATS</Link></li>
                            <li><Link to="/3pl">3PL WAREHOUSING</Link></li>
                            <li><Link to="/gig">GIG</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='w-[30%]'>
                    <div className='w-[100%] sm:w-[60%] sm:flex sm:flex-col sm:justify-center' >
                        <h3 className='w-fit ml-4  border-b-[3px] border-cyan-500 sm:text-[1.3rem]'>Policies</h3>
                        <ul className=" flex flex-col justify-evenly h-56 font-sans sm:text-left sm:ml-4 sm:h-[24vh]">
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/engine">Karam.Ai</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='w-full sm:mt-8 mt-12'>
            <h2 className='text-2xl font-normal sm:mb-8'>Follow our socials</h2>
        </div>
        <div className=' flex flex-row w-full justify-evenly mt-2  sm:w-[60%] sm:mx-auto'>
            <div className="">
                <a href=''> <BsInstagram className='text-[4rem] w-[60%] text-cyan-400'/></a>
            </div>
            <div className="">
                <a href=''><BsFacebook className='text-[4rem] w-[60%] text-cyan-400'/></a>
            </div>
            <div className="">
                <a href=''><FaLinkedin className='text-[4rem] w-[60%] text-cyan-400' /></a>
            </div>
            <div className="">
                <a href=''><BsTwitter className='text-[4rem] w-[60%] text-cyan-400'/></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer