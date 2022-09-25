import React from 'react'

const Social = () => {
    return (
        <>
            <div className='w-11/12 desktop:w-4/5 py-6 justify-center text-white mx-auto'>
                <div className='my-3'>
                    <span className='font-mono font-bold text-2xl tracking-widest'>Social Links</span>
                </div>
                <div className='desktop:mx-12 my-6'>
                    <div className='grid grid-cols-2 tablet:grid-cols-4 gap-6 mid:gap-12 text-center justify-center text-xl font-bold font-mono'>
                        <div className='flex flex-col space-y-2 my-4'>
                            <a href="https://github.com/pc-beast" target='_blank' className='flex flex-col space-y-2' rel="noreferrer">
                                <span><i className='bx bxl-github bx-sm' ></i></span>
                                <span className='text-sm'>  @pc-beast  </span>
                            </a>
                        </div>
                        <div className='flex flex-col space-y-2 my-4'>
                            <a href="https://www.linkedin.com/in/pavnesh-chaturvedi-208b15197/" target='_blank' className='flex flex-col space-y-2' rel="noreferrer">
                                <span><i className='bx bxl-linkedin bx-sm' ></i></span>
                                <span className='text-sm break-words'>  @pavnesh-chaturvedi-208b15197 </span>
                            </a>
                        </div>
                        <div className='flex flex-col space-y-2 my-4'>
                            <a href="mailto:vikash.up2109@gmail.com" target='_blank' className='flex flex-col space-y-2' rel="noreferrer">
                                <span><i className='bx bxs-envelope bx-sm' ></i></span>
                                <span className='text-sm break-words'> pcbeast.pavnesh@gmail.com </span>
                            </a>
                        </div>
                        <div className='flex flex-col space-y-2 my-4'>
                            <a href="https://www.instagram.com/insta_pavnesh/" target='_blank' className='flex flex-col space-y-2' rel="noreferrer">
                                <span><i className='bx bxl-instagram bx-sm' ></i></span>
                                <span className='text-sm'> @insta_pavnesh </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Social