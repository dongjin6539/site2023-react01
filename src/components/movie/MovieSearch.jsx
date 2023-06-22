import React, { useRef } from 'react';

const MovieSerach = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  }
  const onKeyPress = (event) => {
    if(event.key === "Enter"){
      handleSearch();
    }
  }
  const onClick = () => {
    handleSearch();
  }

  return (
    <div className="movie__search">
      <h2 className='blind'>검색하기</h2>
      <input ref={inputRef} type="search" onKeyPress={onKeyPress} placeholder="영화 검색하기" />
      <button type='submit' onClick={onClick}>검색</button>
    </div>
  )
};

export default MovieSerach;