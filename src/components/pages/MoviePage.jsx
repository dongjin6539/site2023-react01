import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import MovieSlider from '../movie/MovieSlider';
import MovieSearch from '../movie/MovieSearch';
import MovieTag from '../movie/MovieTag';
import MovieCont from '../movie/MovieCont';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d437b67f2b55e3f176bbe6232a79ad1b&language=ko-KR&query=${query}`, 
    )
      .then(response => response.json())
      .then(result => setMovies(result.results))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d437b67f2b55e3f176bbe6232a79ad1b&language=ko-KR", 
      requestOptions
    )
      .then(response => response.json())
      .then(result => setMovies(result.results))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
      <Contents>
        <ContTitle title="movie" />
        <MovieSlider movies={movies} />
        <MovieSearch onSearch={search} />
        <MovieTag />
        <MovieCont movies={movies} />
      </Contents>
    </>
  )
};

export default MoviePage;