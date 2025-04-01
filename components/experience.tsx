'use client';
import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Fragment } from 'react';
const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-40">
      <SectionHeading>My Experience </SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'rgba(255,255,255,0.15)',
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
