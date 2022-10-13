import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <section
      id="aboutme"
      className="about about-bg grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 md:gap-x-8"
    >
      <div className=" flex flex-col gap-y-4">
        <h2>Hello There!</h2>
        <p>
          My name is Marin. I'm a 30-year-old web developer from Croatia. I fell
          in love with programming in 2011, during my university studies. I
          enjoy building good-looking and functional web applications that are
          fully responsive and easy to use.
        </p>
        <p>
          As an ex-military officer, I'm a very disciplined and organized
          person. I feel right at home in high-stress, high-paced environments
          that are common in software development. Problem-solving,
          organization, and attention to detail were the pillars of my military
          career, and now I use those skills to build the best digital products
          I can.
        </p>
        <p>
          I'm also a big fan of learning new things and staying up to date on
          the latest trends in web development. Nowadays, I most often work with
          Next.js, Typescript, TailwindCSS, and Firebase. I'm also familiar with
          NodeJS, Express, MongoDB, MySql, SASS, and tools like Figma and Git.
        </p>
      </div>
      <div className="w-full flex items-center justify-center md:justify-end">
        <div className=" w-[24rem] items-center justify-center">
          <Image
            src="/assets/profile.webp"
            width={750}
            height={750}
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
