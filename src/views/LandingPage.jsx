import React from 'react';
import { api_id, api_key } from '../api-keys.json';

const LandingPage = () => {
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${api_id}&app_key=${api_key}`;

  return (
    <div>
      <p>Landing Page</p>
    </div>
  );
};

export default LandingPage;
