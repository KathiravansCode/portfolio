import React from 'react'
import Netflix from "../assets/projectimages/Netflixcover.png"
import Airbnb from "../assets/projectimages/Airbnbcover.jpg"
import Bc from "../assets/projectimages/blockchaincover.png"
function Projects() {
  return (
    <>
      <div className="w-[1000px] mx-auto my-16 rounded-lg p-3">
         <h1 className="text-3xl text-violet-600 font-bold text-center mt-2 mb-2">Projects</h1>
         <div className="text-center">
         <p className="text-justify text-lg">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
         <div className="w-full flex justify-center gap-3 items-center mt-2">
         <div className="mt-2  w-[300px]">
              <div className="border w-full p-2 rounded-xl hover:border-violet-800 shadow-md">
              <img src={Netflix} alt="" className="w-full h-[150px] rounded-xl object-cover" />
                <p className="mt-1 mb-1 text-justify">Developed a clone website of netflix using React.js.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block w-full mt-1 mb-1 bg-black text-white p-2 rounded-xl">Link</a>
              </div>
        </div>
        <div className="mt-2 w-[300px]">
              <div className="border w-full p-2 rounded-xl  hover:border-violet-800 shadow-md">
              <img src={Airbnb} alt="" className="w-full h-[150px] rounded-xl object-cover"/>
                <p className="mt-1 mb-1 text-justify">Developed a clone website of Airbnb using HTML,CSS,Bootstrap.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block w-full mt-1 mb-1 bg-black text-white p-2 rounded-xl">Link</a>
              </div>
        </div>
        <div className="mt-2 w-[300px]">
              <div className="border w-full p-2 rounded-xl  hover:border-violet-800 shadow-md">
              <img src={Bc} alt="" className="w-full h-[150px] rounded-xl object-cover" />
                <p className="mt-1 mb-1 text-justify">Developed a fullstack webapp based on Blockchain technology. </p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block w-full mt-1 mb-1 bg-black text-white p-2 rounded-xl">Link</a>
              </div>
        </div>
        </div>

        
         </div>
      </div>
    </>
  )
}

export default Projects
