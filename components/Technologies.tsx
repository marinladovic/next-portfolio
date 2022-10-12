import {
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

function Technologies() {
  return (
    <div className="flex flex-col space-y-8 py-12 px-8 md:order-2 lg:space-y-12">
      <div className="flex items-center justify-between text-3xl text-gray-400 lg:text-5xl">
        <SiFigma />
        <SiTailwindcss />
        <TbBrandNextjs />
        <SiTypescript />
        <SiFirebase />
      </div>
      <div className="flex flex-col space-y-2">
        <h2 className="capitalize tracking-wide text-xl font-semibold md:text-2xl lg:text-3xl">
          my toolbox
        </h2>
        <p className="text-sm text-gray-400 lg:text-base">
          Choosing the right tools for the job is crucial. It's the backbone of
          any project. The right tech stack ensures that your product is
          quality, reliable, and scalable. I aim to use the latest and greatest
          to build the best possible product.
        </p>
        <p className="text-sm text-gray-400 lg:text-base">
          I am a big fan of learning new things and experimenting with new tech,
          and I'm always looking for new challenges.
        </p>
      </div>
    </div>
  );
}

export default Technologies;
