import React from 'react'

function Imagelink({link,img}) {
  return (
    <>
      <div className="">
           <a href={link} target="_blank" rel="noopener noreferrer"><img src={img} alt="" className="h-[60px] w-[60px] object-cover rounded-full" /></a>
      </div>
    </>
  )
}

export default Imagelink
