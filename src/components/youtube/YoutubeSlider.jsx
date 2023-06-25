import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/scss/effect-coverflow";

const YoutubeImg = ({ youtube }) => {
  return (
    <Link to={`https://www.youtube.com/watch?v=${youtube.id.videoId}`} target='_blank'>
      <img src={youtube.snippet.thumbnails.medium.url} alt={youtube.snippet.title} style={{ width: '1200px' }}/>
    </Link>
  )
}

const YoutubeSlider = ({ youtubes }) => {
  return (
    <div className='youtube__slider'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
      >
        {youtubes.map((youtube, index) => (
          <SwiperSlide key={index}>
            <YoutubeImg 
              youtube={youtube}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default YoutubeSlider;