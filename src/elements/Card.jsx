import React from 'react'

const Card = props => {
    return (
        <>
            <div className='flex flex-col text-white bg-zinc-800 rounded-lg p-4 space-y-6'>
                <span className='text-base font-mono font-bold'>{props.project.heading}</span>
                <span className='text-sm font-mono py-4 opacity-80'>{props.project.description}</span>
                <span className='text-sm font-mono opacity-80'>{props.project.tech}</span>
            </div>
        </>
    )
}

export default Card