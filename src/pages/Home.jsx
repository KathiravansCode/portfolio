import React from 'react'
import Resume from '../assets/Resume.pdf'
import Bg from "../components/Bg"
function Home() {
  return (
    <>
   
    <div className="w-[1400px] h-screen mx-auto my-24 p-3">
      
      <div className="flex justify-between items-center ml-32 ">
            <div className=" text-violet-600 text-4xl leading-snug mb-0">
                 <div className="text-4xl">Hi, Iam <span className="text-orange-400 text-4xl"> Kathiravan </span></div> <br/> 
                  <div className="text-4xl">MERN Stack Developer &App Developer.</div><br/>
                    
                 <div className="text-4xl">Searching for Jobs.</div> 

                 <div className="w-36 text-orange-400 border-2 mt-8 text-2xl text-center bg-white p-2 rounded-xl hover:border-orange-400">
                 <a href={Resume} target="_blank" rel="noopener noreferrer">
                
                 
                   Resume
           
                 
                  </a>
                 </div>
            </div>
            <img src="https://d3tqq64j8blxdp.cloudfront.net/wp-content/uploads/20230615113959/best-web-development-languages.webp" alt="" className="h-[420px] w-[420px] object-cover mr-32 rounded-full animated-img" />

      </div>
    </div>
  
    </>
   
  )
}

export default Home
