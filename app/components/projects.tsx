import React, { useRef } from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import Project from './project'

export default function Projects() {
  return (
    <section className='scroll-mt-28' id='projects'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}
