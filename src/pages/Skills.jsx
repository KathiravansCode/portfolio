import React from 'react'
import cover from "../assets/fist bump.png"
import imageArray from "../utils/assets";
import Imagelink from "../components/Imagelink"
function Skills() {
  return (
    <>
      
    <div className="w-[1400px] mx-auto my-4  p-5">
        <div className="flex gap-20">
             <img src={cover} alt=""  className="h-[500px] w-[500px]  object-cover rounded-3xl"/>
             <div className="">
              <h1 className="text-3xl text-violet-500 font-bold text-center ml-16 mt-28 mb-2">My Skills</h1>
               <div className="h-[300px] w-[500px] p-2 flex gap-3 flex-wrap justify-start">
                
                  {
                  imageArray.map((img)=><Imagelink src={img}/>)
                  }
                </div>

             </div>
             
        </div>
      
              

       
       
    </div>

   
 
         
    </>
  )
}

export default Skills
