import { useEffect, useState } from 'react';
import { api_key } from '../api-keys.json';
import useGetLikes from './useGetLikes';

const useGetRandomRecipes = (setLoading) => {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [likesValues, lastMaxValue] = useGetLikes(12, 30000, 1000);

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=12`
    );
    const data = await response.json();
    setRandomRecipes(data.recipes);
    setLoading(false);
  };

  return [randomRecipes, likesValues, lastMaxValue];
};

export default useGetRandomRecipes;
