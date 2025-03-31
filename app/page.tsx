import { SectionDivider, Intro, About, Projects, Skill } from '@/components';
import Experience from '@/components/experience';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skill />
      <Experience />
    </main>
  );
}
