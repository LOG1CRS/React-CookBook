import { useState, useEffect } from 'react';
import { api_key } from '../api-keys.json';
import useGetLikes from './useGetLikes';

const useGetCuisineRecipes = (foodType, setLoading) => {
  const [cuisineRecipes, setCuisineRecipes] = useState([]);
  const [likesValues, lastMaxValue] = useGetLikes(12, 10000, 500);

  useEffect(() => {
    getCuisineRecipe(foodType);
  }, []);

  const getCuisineRecipe = async (foodType) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&addRecipeInformation=true&cuisine=${foodType}&number=12`
    );
    const data = await response.json();
    setCuisineRecipes(data.results);
    setLoading(false);
  };

  return [cuisineRecipes, likesValues, lastMaxValue];
};

export default useGetCuisineRecipes;
