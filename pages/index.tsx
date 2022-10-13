import Head from 'next/head';
import Banner from '../components/Banner';
import BestPractices from '../components/BestPractices';
import Navbar from '../components/Navbar';
import Technologies from '../components/Technologies';
import ProjectList from '../components/ProjectList';
import About from '../components/About';

export default function Home() {
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
      <main className="flex w-full max-w-6xl mx-auto flex-1 flex-col px-4 py-16 gap-y-28 lg:px-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 md:gap-x-6 lg:gap-x-16 xl:gap-x-20">
          <Technologies />
          <BestPractices />
        </section>
        <ProjectList />
        <About />
      </main>
    </div>
  );
}
