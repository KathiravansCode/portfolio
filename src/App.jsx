import {Routes,Route} from "react-router-dom"
import Bg from "./components/Bg"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

function App() {

return (
    <>
    <Navbar/>
  
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/skills" element={<Skills/>}/>
       <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </>
)

}

export default App
