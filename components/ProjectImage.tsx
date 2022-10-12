import Image from 'next/image';

interface Props {
  image_url: string;
}

function ProjectImage({ image_url }: Props) {
  return (
    <div className="min-w-full rounded-md overflow-hidden">
      <div className="py-0.5 bg-[#F7F7FF] flex justify-end items-center space-x-1.5 px-4">
        <span className="w-3 h-3 border-2 border-red-400 rounded-full bg-red-400 "></span>
        <span className="w-3 h-3 border-2 border-yellow-400 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 border-2 border-green-400 rounded-full bg-green-400"></span>
      </div>
      <div className="border-t-0 w-full">
        <img src={image_url} className="w-full object-cover" />
      </div>
    </div>
  );
}

export default ProjectImage;
