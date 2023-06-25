import React, { useRef } from 'react';

const YoutubeSerach = ({ onSearch }) => {
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
    <div className="youtube__search">
      <h2 className='blind'>검색하기</h2>
      <input ref={inputRef} type="search" onKeyPress={onKeyPress} placeholder="유튜브 검색하기" />
      <button type='submit' onClick={onClick}>검색</button>
    </div>
  )
};

export default YoutubeSerach;