import React from 'react'

const Experience = () => {
    return (
        <>
            <div className='w-11/12 tablet:w-10/12 desktop:w-3/5 py-10 justify-center text-white mx-auto'>
                <div className='my-3'>
                    <span className='font-mono font-bold text-2xl tracking-widest'>Experience</span>
                </div>
                {/* Work 1 Starts */}
                <div className='flex space-x-16 mx-6 tablet:mx-12 my-8 py-3'>
                    <div className='w-1/12 desktop:w-2/12'>
                        <span className='my-6 text-base font-mono font-bold'>2020 - 2022</span>
                    </div>
                    <div className='flex flex-col w-4/5'>
                        <span className='text-base font-mono font-bold'>Full Stack and Technical Lead - Everpress</span>
                        <span className='text-sm font-mono my-4 opacity-75'>Led a team of 5 engineers to develop our creator tools and e-commerce app. Collaborated closely with the Head of Product to track our tactical objectives, improve technical directions and shipping frequency.</span>
                        <span className='text-sm font-mono opacity-75'>React | Redux | NodeJS | Express | AWS</span>
                    </div>
                </div>
                {/* Work 1 Ends */}
            </div>
        </>
    )
}

export default Experience