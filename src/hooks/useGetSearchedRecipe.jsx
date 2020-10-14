import { useState, useEffect } from 'react';
import useGetLikes from './useGetLikes';

const useGetSearchedRecipe = (searchValue, setLoading) => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [likesValues, lastMaxValue] = useGetLikes(12, 10000, 500);
  const { REACT_APP_API_KEY } = process.env;

  useEffect(() => {
    setLoading(true);
    getSearchedRecipe(searchValue);
  }, [searchValue]);

  const getSearchedRecipe = async (searchValue) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&addRecipeInformation=true&query=${searchValue}&number=12`
    );
    const data = await response.json();
    setSearchedRecipes(data.results);
    setLoading(false);
  };

  return [searchedRecipes, likesValues, lastMaxValue];
};

export default useGetSearchedRecipe;
