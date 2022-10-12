import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectImage from './ProjectImage';

interface Props {
  image_urls: string[];
}

function ProjectDisplay({ image_urls }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-1 md:space-y-2">
      <div className="relative w-full">
        <FaChevronLeft
          onClick={() => handleScroll('left')}
          className={`absolute top-0 bottom-0 -left-6 z-40 m-auto text-white/50 h-6 w-6 cursor-pointer transition hover:scale-125 ${
            !isMoved && 'hidden'
          }`}
        />
        <div
          ref={rowRef}
          className="flex space-x-1 scrollbar-hide items-center overflow-x-scroll shadow-xl"
        >
          {image_urls.map((url) => (
            <ProjectImage key={url} image_url={url} />
          ))}
        </div>
        <FaChevronRight
          onClick={() => handleScroll('right')}
          className={`absolute top-0 bottom-0 -right-6 z-40 m-auto text-white/50 h-6 w-6 cursor-pointer transition hover:scale-125`}
        />
      </div>
    </div>
  );
}

export default ProjectDisplay;
