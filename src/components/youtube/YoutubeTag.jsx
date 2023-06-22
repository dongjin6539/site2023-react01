import React from 'react';

const youtubeTage = [
  { name: "nba"},
  { name: "kbl"},
  { name: "sports"},
  { name: "baseball"},
  { name: "soccor"},
  { name: "basketball"},
]

const YoutubeTag = ({ onSearch }) => {
  const [activeTag, setActiveTag] = React.useState('');
  function btnClick(e){
    setActiveTag(e.target.innerText);
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag">
      <div>
        {youtubeTage.map((tag, index) => (
          <button onClick={btnClick} key={index} className={tag.name === activeTag ? 'active' : ''}>{tag.name}</button>
        ))}
      </div>
    </div>
  )
}

export default YoutubeTag