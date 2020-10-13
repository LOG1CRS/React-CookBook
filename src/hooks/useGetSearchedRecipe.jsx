import { useState, useEffect } from 'react';
import { api_key } from '../api-keys.json';
import useGetLikes from './useGetLikes';

const useGetSearchedRecipe = (searchValue, setLoading) => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [likesValues, lastMaxValue] = useGetLikes(12, 10000, 500);

  useEffect(() => {
    getSearchedRecipe(searchValue);
  }, []);

  const getSearchedRecipe = async (searchValue) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&addRecipeInformation=true`
    );
    const data = await response.json();
    setSearchedRecipes(data.results);
    setLoading(false);
  };

  return [searchedRecipes, likesValues, lastMaxValue];
};

export default useGetSearchedRecipe;
