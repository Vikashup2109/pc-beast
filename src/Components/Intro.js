import React from 'react';
import dp from '../assets/avatar.png'
const Intro = () => {
    return (
        <>
            <div className='flex flex-col tablet:flex-row py-32 text-white justify-center align-middle space-x-6'>
                <div>
                    <img src={dp}
                        className='w-40 rounded-full border-4 border-zinc-800 mx-auto'
                        alt="Profile"
                    />
                </div>
                <div className='flex flex-col text-center tablet:text-left my-auto p-1'>
                    <span className='text-3xl font-bold font-mono'>Pavnesh Chaturvedi</span>
                    <span className='text-base opacity-70 font-mono py-1'>Product-focused Fullstack Developer</span>
                    <span className='text-lg opacity-70 font-mono'>3jiSH4</span>
                </div>
            </div>
        </>
    )
}

export default Intro