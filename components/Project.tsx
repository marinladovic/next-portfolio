import { ProjectType } from '../typings';
import { TbExternalLink } from 'react-icons/tb';
import ProjectDisplay from './ProjectDisplay';
import Slider from './Slider';

interface Props {
  project: ProjectType;
  bg_colors: {
    bg_from: string;
    bg_to: string;
  };
}

function Project({ project, bg_colors }: Props) {
  const { bg_from, bg_to } = bg_colors;

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 px-8 py-16 items-center justify-center rounded-lg shadow-lg gap-y-10 md:gap-y-0 md:gap-x-10"
      style={{
        background: `linear-gradient(90deg, ${bg_from} 0%, ${bg_to} 100%)`,
      }}
    >
      <div className="flex flex-col gap-y-2 text-center">
        <h2 className="capitalize tracking-wide text-xl font-semibold text-shadow-lg md:text-2xl lg:text-3xl">
          {project.title}
        </h2>
        <p className="text-sm text-shadow-lg lg:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {project.built_with.map((tech) => (
            <span className="text-xs py-0.5 px-1.5 uppercase border border-white rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-2 md:space-x-4 mt-4 items-center justify-center">
          <a
            href={project.live_url}
            target="_blank"
            className="btn btn-project__primary flex items-center justify-center gap-x-1"
          >
            Demo
            <TbExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.github_url}
            target="_blank"
            className="btn btn-project__secondary flex items-center justify-center gap-x-1"
          >
            Source
            <TbExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      <Slider image_urls={project.image_urls} />
    </div>
  );
}

export default Project;
