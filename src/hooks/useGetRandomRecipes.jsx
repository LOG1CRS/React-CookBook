import { useEffect, useState } from 'react';
import { spoonacular_api_key } from '../api-keys.json';

const useGetRandomRecipes = () => {
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${spoonacular_api_key}&number=12`
    );
    const data = await response.json();
    setRandomRecipes(data.recipes);
  };

  return randomRecipes;
};

export default useGetRandomRecipes;
