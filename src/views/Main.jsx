import React from 'react';
import HeroMain from '../components/main/HeroMain';
import MainList from '../components/main/MainList';

const LandingPage = () => {
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${api_id}&app_key=${api_key}`;

  return (
    <>
      <HeroMain />
      <MainList />
    </>
  );
};

export default LandingPage;
