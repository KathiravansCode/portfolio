 <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>

import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

  <Routes>
      <Route element="/" path={<Home/>}/>
      <Route element="/about" path={<About/>}/>
      <Route element="/projects" path={<Projects/>}/>
      <Route element="/skills" path={<Skills/>}/>
     
    </Routes>



    <div className="w-[1400px] mx-auto my-16 border p-5">
             <div className="flex gap-20 items-center">
             <img src={cover} alt=""  className="h-[400px] w-[400px] object-cover rounded-full"/>
             
             </div>
          </div>


          <p className="text-center">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>