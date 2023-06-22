import React from 'react';

const movieTag = [
  { name: "최신 영화", url: "https://api.themoviedb.org/3/movie/now_playing"},
  { name: "인기 영화", url: "https://api.themoviedb.org/3/movie/popular"},
  { name: "영화 순위", url: "https://api.themoviedb.org/3/movie/top_rated"},
  { name: "개봉 예정", url: "https://api.themoviedb.org/3/movie/upcoming"},
  { name: "TV 인기", url: "https://api.themoviedb.org/3/tv/popular"},
  { name: "TV 순위", url: "https://api.themoviedb.org/3/tv/top_rated"},
  { name: "영화 트렌드", url: "https://api.themoviedb.org/3/trending/movie/day"},
  { name: "TV 트렌드", url: "https://api.themoviedb.org/3/trending/tv/day"},
]

const MovieTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = React.useState('');
  function btnClick(e){
    const clickedTag = movieTag.find(
      (tag) => tag.name === e.target.innerText
    );
    if(clickedTag) {
      setActiveTag(clickedTag.name);
      onSearch(clickedTag.url);
    }
  }
  return (
    <div className="movie__tag">
      <div>
        {movieTag.map((tag, index) => (
          <button onClick={btnClick} key={index} className={tag.name === activeTag ? 'active' : ''}>{tag.name}</button>
        ))}
      </div>
    </div>
  )
}

export default MovieTag