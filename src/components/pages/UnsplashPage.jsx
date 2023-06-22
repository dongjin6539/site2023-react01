import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import UnsplashSlider from '../unsplash/UnsplashSlider';
import UnsplashSerach from '../unsplash/UnsplashSerach';
import UnsplashTag from '../unsplash/UnsplashTag';
import UnsplashCont from '../unsplash/UnsplashCont';

const UnsplashPage = () => {
  const [images, setImages] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=8KxfRej-WhG3bLJet9sMULT9u09loxyVYjMsOdZVKTg&per_page=30&query=${query}`, 
    )
      .then(response => response.json())
      .then(result => setImages(result.results))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      "https://api.unsplash.com/photos?client_id=8KxfRej-WhG3bLJet9sMULT9u09loxyVYjMsOdZVKTg&per_page=30", 
      requestOptions
    )
      .then(response => response.json())
      .then(result => setImages(result))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
      <Contents>
        <ContTitle title="unsplash" />
        <UnsplashSlider images={images} />
        <UnsplashSerach onSearch={search} />
        <UnsplashTag onSearch={search} />
        <UnsplashCont images={images} />
      </Contents>
    </>
  )
};

export default UnsplashPage;