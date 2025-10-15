import React from 'react'

function Contact() {
  return (
    <div className='w-[100%] h-[100vh] p-1 bg-[#0A0114] pt-[50px]'> 
       <h1 className='text-4xl text-center mt-[50px] text-white font-bold tracking-wider drop-shadow-[0_0_25px_#c084fc]'>Contact Us</h1>
       <div className='w-[55%] h-[500px] border-2 border-[#573876   ] mx-auto mt-[50px] rounded-2xl shadow-[0_0_20px_#c084fc]'>
        <div className='w-[90%] h-[50px] flex justify-between mx-auto mt-[50px]'>
          
           
            <input className='w-[350px] h-[52px] border-2 border-[#573876] rounded-[10px] text-white pl-[15px] font-medium outline-[#c084fc] shadow-[0_0_10px_#c084fc]'  placeholder='Your Name' type="text" name="" id="" />
            <input className='w-[350px] h-[52px] border-2 border-[#573876] rounded-[10px] text-[white] pl-[15px] font-medium outline-[#c084fc] shadow-[0_0_10px_#c084fc]' placeholder='Your Email' type="text" name="" id="" />
        </div>
        <div className='w-[90%] h-[max-content] border-2 mx-auto mt-[50px]'>
           <textarea className='w-[100%] h-[200px] border-2 rounded-[10px] border-[#573876] pl-[15px] pt-[15px] text-white font-medium outline-[#c084fc] shadow-[0_0_10px_#c084fc]'  name="" id="" placeholder='Your Message...'></textarea>
        </div>
        <button className='w-[89%] h-[50px] bg-[#c084fc] block mx-auto mt-[30px] rounded-3xl font-bold text-white transition-all duration-200 cursor-pointer shadow-[0_0_10px_#c084fc]  hover:bg-[#c084fcc4]'>Send Message</button>
       </div>
    </div> 
  )
}

export default Contact
 