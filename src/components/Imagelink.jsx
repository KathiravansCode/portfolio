import React from 'react'

function Imagelink({src}) {
  return (
    <>
      <div className="">
      <div className="h-[80px] w-[80px] p-2 rounded-xl border hover:bg-violet-600">
               <img src={src} alt="" className="h-[60px] w-[60px] object-cover rounded-full" />             
      </div>


            
      </div>
    </>
  )
}

export default Imagelink
