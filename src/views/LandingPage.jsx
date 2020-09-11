import React from 'react';
import { api_id, api_key } from '../api-keys.json';
import Hero from '../components/landing/Hero';

const LandingPage = () => {
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${api_id}&app_key=${api_key}`;

  return (
    <>
      <Hero />
    </>
  );
};

export default LandingPage;
