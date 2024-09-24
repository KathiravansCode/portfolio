import React from 'react'
import Show from "../assets/Display.png"
import Lilogo from "../assets/li.jpeg"
import Gmail from "../assets/gmail.jpeg"
function Contact() {
  return (
    <>

     <div className="w-[740px]  p-2 mx-auto my-16">
            <h1 className="text-3xl text-center text-violet-700 font-bold mb-2">Contact me!</h1>
            <div className="flex gap-20 items-center">
              <div className="w-[370px] mt-8">
                  <input type="text" className='w-full block  border rounded-xl p-2 mt-2 bg-slate-300' placeholder="Enter phone number" />
                  <input type="email" className='w-full block  border rounded-xl p-2 mt-2 bg-slate-300' placeholder="Enter email" />
                  <textarea name="Tell me.." rows="7" id="" className="w-full block  border rounded-xl p-2 mt-2 bg-slate-300"></textarea>
                  <button className="block w-full p-2 bg-black text-white mt-3 border-none rounded-xl">Send</button>
              </div>
              <div className="w-[240px] mt-16 p-2 h-[240px]">
             
              <a href="https://linkedin.com/in/kathiravan07" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-xl font-semibold mb-2"><img src={Lilogo} alt="" className="h-[60px] w-[60px] object-cover rounded-full" /> LinkedIn</a>
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-xl font-semibold mb-2"><img src={Gmail} alt="" className="h-[60px] w-[60px] object-cover rounded-full" /> Gmail</a>
              </div>
              </div>
              <div>
             
              </div>
           
      
     </div>
    </>
  )
}

export default Contact
