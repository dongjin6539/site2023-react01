import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/scss/effect-coverflow";

const MovieImg = ({ movie }) => {
  return (
    <Link to={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank'>
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={movie.title}
      />
    </Link>
  )
}

const MovieSlider = ({ movies }) => {
  return (
    <div className='movie__slider'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieImg 
              movie={movie}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default MovieSlider;