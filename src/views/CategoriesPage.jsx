import React, { useState } from 'react';
import HeroCategories from '../components/categories/HeroCategories';
import CategoriesList from '../components/categories/CategoriesList';
import CategoriesResults from '../components/categories/CategoriesResults';

const CategoriesPage = () => {
  const [results, setResults] = useState(false);
  const [foodType, setFoodType] = useState('');
  return (
    <>
      <HeroCategories setResults={setResults} />
      {results ? (
        <CategoriesResults foodType={foodType} />
      ) : (
        <CategoriesList setResults={setResults} setFoodType={setFoodType} />
      )}
    </>
  );
};

export default CategoriesPage;
