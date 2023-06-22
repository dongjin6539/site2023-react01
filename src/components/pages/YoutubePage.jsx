import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import YoutubeSlider from '../youtube/YoutubeSlider';
import YoutubeSearch from '../youtube/YoutubeSearch';
import YoutubeTag from '../youtube/YoutubeTag';
import YoutubeCont from '../youtube/YoutubeCont';

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&videoDuration=medium&key=AIzaSyCP7j_dh-rc1KAc4FUEHCGNU0MZhPsM_Rw`, 
    )
      .then(response => response.json())
      .then(result => setYoutubes(result.items))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=농구&type=video&videoDuration=medium&key=AIzaSyCP7j_dh-rc1KAc4FUEHCGNU0MZhPsM_Rw'
    ).then((response) => response.json())
    .then((result) => setYoutubes(result.items))
    .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Contents>
        <ContTitle title="youtube"/>
        <YoutubeSlider />
        <YoutubeSearch onSearch={search}/>
        <YoutubeTag />
        <YoutubeCont youtubes={youtubes}/>
      </Contents>
    </>
  )
}

export default Youtube