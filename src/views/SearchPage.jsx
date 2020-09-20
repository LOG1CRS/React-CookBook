import React, { useState } from 'react';
import HeroSearch from '../components/search/HeroSearch';
import SearchResults from '../components/search/SearchResults';

const SearchPage = () => {
  const [resultsView, setResultsView] = useState(false);

  return (
    <>
      <HeroSearch handleResults={setResultsView} valueResults={resultsView} />
      {resultsView ? <SearchResults /> : null}
    </>
  );
};

export default SearchPage;
