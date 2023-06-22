import React from 'react'
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
    const formatRating = (rating) => {
      return rating.toFixed(1);
    };

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
      <li>
        <Link to={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank'>
          {renderPoster()}
          <span className='title'>{movie.title}</span>
          <span className='title'>{movie.name}</span>
          <span className='star'>{formatRating(movie.vote_average)}</span>
        </Link>
      </li>
    );
};

export default MovieItem;