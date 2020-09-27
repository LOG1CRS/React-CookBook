import React, { useState } from 'react';
import HeroSearch from '../components/search/HeroSearch';
import SearchResults from '../components/search/SearchResults';

const SearchPage = () => {
  const [resultsView, setResultsView] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <HeroSearch
        handleResults={setResultsView}
        valueResults={resultsView}
        setSearchValue={setSearchValue}
      />
      {resultsView ? <SearchResults searchValue={searchValue} /> : null}
    </>
  );
};

export default SearchPage;
