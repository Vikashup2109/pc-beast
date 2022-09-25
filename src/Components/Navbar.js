import React from 'react';
import 'boxicons';
import { saveAs } from 'file-saver';
import resumeUrl from '../assets/resume.pdf'


const Navbar = () => {

    const saveFile = () => {
        saveAs(
            resumeUrl, `pc-beast's resume.pdf`
        )
    }
    return (
        <>
            <div className='flex px-6 desktop:px-20 desktop:py-4 justify-between text-white p-4'>
                <span className='text-base desktop:text-lg p-4 font-pixel'>pc-beast</span>
                <button type="submit" className='flex px-4 my-3 text-base border-0 rounded space-x-2 hover:text-zinc-400' onClick={saveFile}>
                    <span className='align-bottom my-auto font-pixel'>Resume</span>
                </button>
            </div>
        </>
    )
}

export default Navbar