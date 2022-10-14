import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

interface Props {
  image_urls: string[];
}

function Slider({ image_urls }: Props) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        initialSlide={0}
        loop={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {image_urls.map((image_url) => (
          <SwiperSlide key={image_url} className="shadow">
            <Image
              src={image_url}
              width={1280}
              height={720}
              unoptimized
              alt="project image"
              className="rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
