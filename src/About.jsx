import React from 'react'

function About() {
    return (
        <div className='w-[100%] h-[100vh] p-1 flex justify-around items-center bg-black text-white'>

            <div className="w-[400px] h-[500px] rounded-2xl overflow-hidden relative flex justify-center items-center">
                <div className="wrapper"></div>

                <img
                    className="imge"
                    src="src/WhatsApp Image 2025-10-09 at 3.47.35 PM.jpeg"
                    alt=""
                />
            </div>


            <div className='w-[700px] h-[500px] flex flex-col justify-center'>
                <h1 className='text-4xl font-bold text-center tracking-wider mb-6'>
                    About Me
                </h1>
                <p className='text-[17px] font-medium leading-[30px]'>
                    Hey there! I’m <span className="text-[#BD7FFB] font-semibold">Ammar Hassan</span>, a creative frontend developer who enjoys crafting smooth and beautiful web experiences.
                </p>
                <p className='text-[17px] font-medium leading-[30px] mt-4'>
                    I love working with <span className="text-blue-400">React</span> and <span className="text-sky-400">Tailwind CSS</span>, experimenting with design, and constantly learning new things to improve my skills.
                </p>
                <p className='text-[17px] font-medium leading-[30px] mt-4'>
                    I believe every small detail matters — because great design starts with great attention.
                </p>
            </div>
            
        </div>
        
    )
}

export default About
