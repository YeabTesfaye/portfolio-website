import { SectionDivider, Intro, About, Projects, Skill, Contact, Experience } from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skill />
      <Experience />
      <Contact />
    </main>
  );
}
