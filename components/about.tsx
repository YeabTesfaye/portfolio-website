'use client';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.75 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">software engineer</span> and{' '}
        <span className="font-medium">penetration tester</span> at{' '}
        <span className="font-medium">Ethiopian Airlines</span>, passionate
        about programming, cybersecurity, and their impact on society. I enjoy
        working with{' '}
        <span className="font-medium">full-stack technologies</span>
        and constantly strive to improve my skills. My core stack includes{' '}
        <span className="font-medium">
          React, Next.js, Node.js, Prisma, .NET, and various backend
          technologies
        </span>
        .
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I enjoy{' '}
        <span className="font-medium">learning languages</span>—especially
        English. I also love watching football and reading books. My goal is to
        advance in my career and become a{' '}
        <span className="font-medium">senior developer</span>. I am currently
        looking for{' '}
        <span className="font-medium">remote job opportunities</span>
        to further develop my skills and grow professionally.
      </p>
    </motion.section>
  );
};

export default About;
