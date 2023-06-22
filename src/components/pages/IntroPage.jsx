import React from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import IntroCont from '../intro/IntroCont';

const IntroPage = () => {
  return (
    <>
      <Contents>
        <ContTitle title="intro" />
        <IntroCont />
      </Contents>
    </>
  )
};

export default IntroPage;