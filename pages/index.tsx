import Head from 'next/head';
import Banner from '../components/Banner';
import BestPractices from '../components/BestPractices';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Technologies from '../components/Technologies';
import { ProjectType } from '../typings';
import useProjects from '../hooks/useProjects';

const Home = () => {
  const projects = useProjects();

  const bg_colors = [
    { bg_from: '#283c86', bg_to: '#45a247' },
    { bg_from: '#F2994A', bg_to: '#F2C94C' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>marinladovic.com | Marin Ladović - Web Developer</title>
        <meta
          name="description"
          content="Web developer, based in Croatia. I design and build reliable and responsive web apps using NextJS, Typescript, and Tailwind."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <main className="flex w-full max-w-6xl mx-auto flex-1 flex-col px-4 py-16 space-y-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-16">
          <Technologies />
          <BestPractices />
        </section>
        <section className="w-full flex flex-col space-y-6">
          {projects.map((project, index) => (
            <Project
              key={project.id}
              project={project as ProjectType}
              bg_colors={bg_colors[index]}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
