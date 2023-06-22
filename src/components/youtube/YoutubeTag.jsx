import React from 'react';
import { Link } from 'react-router-dom';

const YoutubeTag = () => {
  return (
    <div className="youtube__tag">
      <ul>
        <li><Link to="/">nba</Link></li>
        <li><Link to="/">wnba</Link></li>
        <li><Link to="/">kbl</Link></li>
        <li><Link to="/">wkbl</Link></li>
        <li><Link to="/">basketball</Link></li>
      </ul>
    </div>
  )
}

export default YoutubeTag