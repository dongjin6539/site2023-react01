import React from 'react';
import Contents from '../layout/Contents';

import Slider from '../section/Slider';
import Intro from '../section/Intro';
import Portfolio from '../section/Portfolio';
import Youtube from '../section/Youtube';
import Unsplash from '../section/Unsplash';
import Movie from '../section/Movie';

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr={'slider__wrap gmarket5'}/>
        <Intro attr={'intro__wrap gmarket5 section'}/>
        <Portfolio attr={'port__wrap gmarket5 section center bg-blue'}/>
        <Youtube attr={'youtube__wrap gmarket5 section'}/>
        <Unsplash attr={'unsplash__wrap gmarket5 section bg-blue'}/>
        <Movie attr={'movie__wrap gmarket5 section'}/>
      </Contents>
    </>
  )
};

export default Home;