import { useState, useEffect } from 'react';
import getLikes from '../utils/getLikes';

const useGetCuisineRecipes = (foodType, setLoading) => {
  const [cuisineRecipes, setCuisineRecipes] = useState([]);
  const [likesValues, lastMaxValue] = getLikes(100, 25000, 500);
  const { REACT_APP_API_KEY } = process.env;

  useEffect(() => {
    getCuisineRecipe(foodType);
  }, []);

  const getCuisineRecipe = async (foodType) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_API_KEY}&addRecipeInformation=true&fillIngredients=true&cuisine=${foodType}&number=100`
    );

    const data = await response.json();

    if (!data.code || data === undefined) {
      setCuisineRecipes(data.results);
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  return [cuisineRecipes, likesValues, lastMaxValue];
};

export default useGetCuisineRecipes;
