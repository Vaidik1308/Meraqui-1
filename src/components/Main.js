import React from 'react';


import MainPart1 from './MainPart1'
import MainPart2 from './MainPart2'
import MainPart3 from './MainPart3'

const Main = () => {
  return (
    <main className=' w-full'>
      {/* <video className=' mt-2 ' src={require('../image/img/video.mp4')} alt="" /> */}
      {/* <video src="../image/img/video.mp4" width="600" height="300" controls="controls" autoplay="true" /> */}
      const Video = () = {
  
    <video controls width="100%">
      
      <source src="../image/img/video.mp4" type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video>
  
};


      {/* <div className='w-full'>
        <div className='w-full my-5'>
          <div className='w-full flex justify-center'>
            <img className='w-[50%]' src={require('../image/logo.png')} alt="logo.png" />
          </div>
          <div className='w-full'>
            <p>Meraqui is one stop 'Hire & Manage' Tech Platform</p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly bg-rectangle-9 bg-cover bg-no-repeat bg-center w-[100%] h-[40vh] ">
          <div className='w-full flex justify-center mt-10'>
            <p className='text-white w-[80%] text-left ml-4'>
            People who'd love to provide value to our business
            </p>
          </div>
          <div className='w-full flex justify-center'>
            <p className='text-white text-[0.5rem] w-[80%] text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis ipsa suscipit. Quia corrupti magnam soluta accusamus. Architecto, nesciunt quis?</p>
          </div>
          <div className='w-full flex justify-center'>
            <img className='w-[95%]' src={require('../image/Stepper.png')} alt="" />
          </div>
        </div>
      </div> */}
      <MainPart1/>
      <MainPart2/> 
      <MainPart3/> 
    </main>
  )
}

export default Main