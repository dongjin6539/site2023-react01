import React from 'react';
import { Link } from 'react-router-dom';

const UnspalshImg = ({ image }) => {
  return (
    <li>
      <Link to={`http://unsplash.com/photos/${image.id}`} target='_blank'>
        <img src={image.urls.regular} alt={image.alt_description} />
      </Link>
    </li>
  )
}

const UnsplashCont = ({ images }) => {
  return (
    <div className='unsplash__cont container'>
      <ul>
        {images.map((image, index) => (
          <UnspalshImg 
            key={index}
            image={image}
          />
        ))}
      </ul>
    </div>
  )
};

export default UnsplashCont;