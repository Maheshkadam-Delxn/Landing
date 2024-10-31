"use client"
import React from 'react'

const About = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center bg-gradient-to-r bg-[#121212] bg[#8ODOC7]'>
    {/* Title Section */}
    <div className='text-center mb-8 '>
      <h1 className='text-5xl font-semibold text-white'>Why choose DevServe?</h1>
    </div>
  
    
    <div className='text-white text-xl text-center mb-16 w-2/3'>
      <p>
        DevServe offers expert IT solutions tailored to your needs, delivering high-quality, scalable, 
        and cost-effective services. With a focus on innovation and reliability, DevServe ensures your 
        business thrives in the digital world.
      </p>
    </div>
  
    
    <div className='bg-white  w-4/6 p-10 rounded-3xl shadow-2xl flex  items-center shadow-gray-800 '>
    <hr className='w-full rotate-90 border-t border-black'/>
     <div className='flex flex-col items-start'>
     <div className='flex items-center'>
   
   {/* <div className='border-l-2 border-black  mr-4'></div> */}

   <h2 className='text-3xl font-semibold text-black'>Premier IT Service Provider</h2>
 </div>

 
 <p className='mt-4 text-black text-xl '>
   DevServe stands out as a premier IT service provider due to its blend of technical expertise,
   client-focused solutions, and a commitment to delivering top-notch services. With a dedicated
   team of professionals, DevServe ensures high-quality development, reliable support, and
   innovative solutions tailored to your business needs. Whether you are looking for web
   development, cloud services, or customized IT solutions, DevServe offers cost-effective,
   scalable, and efficient options, making it a reliable partner in driving digital transformation
   and achieving business success.
 </p>
     </div>
    </div>
  </div>
  
 
  )
}

export default About
