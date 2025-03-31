import { projectsData } from '@/lib/data';
import SectionHeading from './section-heading';
import { Fragment } from 'react';
import Project from './project';

const Projects = () => {
  return (
    <section>
      <SectionHeading>My Project</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
