import { useEffect, useState } from 'react';
import useGetLikes from './useGetLikes';

const useGetRandomRecipes = (
  setLoading,
  page,
  randomRecipes,
  setRandomRecipes
) => {
  const { REACT_APP_API_KEY } = process.env;

  const [likesValues, lastLikesValue] = useGetLikes(12, 30000, 1000);

  useEffect(() => {
    getRandomRecipe();
  }, [page]);

  const getRandomRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=12`
    );
    const data = await response.json();

    if (!data.code) {
      setLoading(false);
      const apiRecipes = randomRecipes.concat(data.recipes);
      setRandomRecipes(apiRecipes);
    } else {
      setLoading(true);
    }
  };

  return [likesValues];
};

export default useGetRandomRecipes;
