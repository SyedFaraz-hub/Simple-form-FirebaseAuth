import React from 'react'
import { TiCancel } from "react-icons/ti";

const CrossModal = () => {
  return (
    <div className="absolute z-50 transition-all delay-100">
    <div className=" h-96 py-4  bg-gray-50 md:w-[30rem] sm:w-[24rem] w-[22rem] rounded-md">
      <div className="flex flex-col items-center justify-between h-[100%]">
     <div>
      <div className="text-8xl text-red-600"><TiCancel/></div>
      <div className="text-center font-bold"><p>Unsuccessful !</p></div>
      </div> 
      <div className="font-bold" onClick={()=>{window.location.reload()}} >Go Back</div>

      </div>
    </div>
  </div>

  )
}

export default CrossModal
