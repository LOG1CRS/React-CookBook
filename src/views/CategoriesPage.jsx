import React, { useState } from 'react';
import HeroCategories from '../components/categories/HeroCategories';
import CategoriesList from '../components/categories/CategoriesList';
import CategoriesResults from '../components/categories/CategoriesResults';

const CategoriesPage = () => {
  const [results, setResults] = useState(false);
  const [foodType, setFoodType] = useState('');
  const [cuisineTitle, setCuisineTitle] = useState('');
  return (
    <>
      <HeroCategories setResults={setResults} />
      {results ? (
        <CategoriesResults foodType={foodType} cuisineTitle={cuisineTitle} />
      ) : (
        <CategoriesList
          setResults={setResults}
          setFoodType={setFoodType}
          setCuisineTitle={setCuisineTitle}
        />
      )}
    </>
  );
};

export default CategoriesPage;
