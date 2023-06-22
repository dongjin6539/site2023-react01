import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/scss';
import "swiper/scss/effect-coverflow";

const MovieImg = ({ movie }) => {
  const renderPoster = () => {
    if (movie.poster_path) {
      return (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      );
    } else {
      // 대체 이미지 URL 또는 로컬 파일 경로를 지정하세요.
      return (
        <img
          src="../../assets/images/movie/noImage.png"
          alt={movie.title}
          style={{ marginLeft: '0' }}
        />
      );
    }
  };
  return (
    <Link to={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank'>
      {renderPoster()}
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
        slidesPerView={5}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
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