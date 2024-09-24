import React from 'react'
import Bg from '../components/Bg'
import Anime from "../assets/envelope greeting.png"
import Cnlogo from "../assets/cn.jpeg"
import Ghlogo from "../assets/gh.png"
import Lilogo from "../assets/li.jpeg"
function About() {
  return (
   <>
  
    <div className="w-[1400px] mx-auto my-16  p-5">
        <div className="flex gap-20">
             <img src={Anime} alt=""  className="h-[400px] w-[400px] object-cover rounded-3xl animated-img"/>
             <div>
              <h1 className="text-3xl text-violet-500 font-bold text-center mt-16 mb-2">About Myself!</h1>
              <p className="text-justify text-lg w-[700px]">Hi! I’m Kathiravan, an MCA graduate, a continuous learner, and a proactive decision-maker. I have gained hands-on experience in web development and app development by working on a diverse range of projects. I am well-versed in both front-end and back-end technologies, including expertise in Flutter for cross-platform development. My goal is to apply my skills in an organization where I can contribute meaningfully, enhance my expertise, and grow alongside the team.</p>
              <div className="w-[500px] p-1 ml-16 mt-5 rounded-2xl">
                        <div className="flex gap-10 justify-center items-center">
                        <a href="https://www.naukri.com/code360/profile/kathir18" target="_blank" rel="noopener noreferrer"><img src={Cnlogo} alt="" className="h-[60px] w-[60px] object-cover rounded-full" /></a>
                        <a href="https://github.com/KathiravansCode" target="_blank" rel="noopener noreferrer"><img src={Ghlogo} alt="" className="h-[60px] w-[60px] object-cover rounded-full " /></a>
                        <a href="https://linkedin.com/in/kathiravan07" target="_blank" rel="noopener noreferrer"><img src={Lilogo} alt="" className="h-[60px] w-[60px] object-cover rounded-full" /></a>
                        </div>
              </div>
             </div>
             
        </div>
      
              

       
       
    </div>

   
 
           
   </>
  )
}

export default About
