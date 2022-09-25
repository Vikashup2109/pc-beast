import React from 'react'
import Card from '../elements/Card'

const Projects = () => {
  const projects = {
    first: {
      id: 1,
      heading: "Full Stack and Technical Lead - Everpress",
      description: "Led a team of 5 engineers to develop our creator tools and e-commerce app. Collaborated closely with the Head of Product to track our tactical objectives, improve technical directions and shipping frequency.",
      tech: "React | Redux | NodeJS | Express | AWS"
    },
    second: {
      id: 2,
      heading: "Full Stack and Technical Lead - Everpress",
      description: "Led a team of 5 engineers to develop our creator tools and e-commerce app. Collaborated closely with the Head of Product to track our tactical objectives, improve technical directions and shipping frequency.",
      tech: "React | Redux | NodeJS | Express | AWS"
    },
    third: {
      id: 3,
      heading: "Full Stack and Technical Lead - Everpress",
      description: "Led a team of 5 engineers to develop our creator tools and e-commerce app. Collaborated closely with the Head of Product to track our tactical objectives, improve technical directions and shipping frequency.",
      tech: "React | Redux | NodeJS | Express | AWS"
    },
    fourth: {
      id: 4,
      heading: "Full Stack and Technical Lead - Everpress",
      description: "Led a team of 5 engineers to develop our creator tools and e-commerce app. Collaborated closely with the Head of Product to track our tactical objectives, improve technical directions and shipping frequency.",
      tech: "React | Redux | NodeJS | Express | AWS"
    },
    fifth: {
      id: 5,
      heading: "Full Stack and Technical Lead - Everpress",
      description: "Led a team of 5 engineers to develop our creator tools and e-commerce app. Collaborated closely with the Head of Product to track our tactical objectives, improve technical directions and shipping frequency.",
      tech: "React | Redux | NodeJS | Express | AWS"
    }
  }

  return (
    <>
      <div className='w-11/12 tablet:w-10/12 desktop:w-3/5 py-6 justify-center text-white mx-auto'>
        <div className='my-3'>
          <span className='font-mono font-bold text-2xl tracking-widest'>Projects</span>
        </div>
        <div className='mx-8 mid:mx-12 my-12'>
          <div className='grid grid-cols-1 mid:grid-cols-2 gap-8'>

            {Object.values(projects).map(project => {
              return (
                <Card key={project.id} project={project} />
              )
            }
            )}

            {/* Last Card Start */}
            <div className='flex flex-col text-white bg-zinc-900 rounded-lg space-y-6 p-8 mid:p-16'>
              <span className='text-xl font-mono font-bold'>Find Out more projects</span>

              <span className='text-sm font-mono my-4 opacity-75 space-x-3 my-auto'>
                <span className='align-bottom'>on my Github...</span>
                <a href="https://github.com/pc-beast" target='_blank' rel="noreferrer">
                  <i className='bx bx-link-external bx-sm hover:opacity-100'></i>
                </a>
              </span>
              <span className='text-sm font-mono opacity-75'>Check out there.</span>
            </div>
            {/* Last Card Ends */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects