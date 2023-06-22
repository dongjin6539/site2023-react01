import React from 'react';
import { Link } from 'react-router-dom';

const YoutubeItem = ({youtube}) => {
  return (
    <li>
      <Link to={`https://www.youtube.com/watch?v=${youtube.id.videoId}`} target='_blank'>
        <img src={youtube.snippet.thumbnails.medium.url} alt={youtube.snippet.title} />
        <span>{youtube.snippet.title}</span>
      </Link>
    </li>
  )
}

const YoutubeCont = ({ youtubes }) => {
  return (
      <div className="youtube__cont container">
        <ul>
          {youtubes.map((youtube, index) => (
            <YoutubeItem 
              key = {index}
              youtube = {youtube}
            />
          ))}
        </ul>
      </div>
  )
}

export default YoutubeCont