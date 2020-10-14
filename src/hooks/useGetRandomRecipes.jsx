import { useEffect, useState } from 'react';
import useGetLikes from './useGetLikes';

const useGetRandomRecipes = (setLoading) => {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [likesValues, lastMaxValue] = useGetLikes(12, 30000, 1000);
  const { REACT_APP_API_KEY } = process.env;

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=12`
    );
    const data = await response.json();
    setRandomRecipes(data.recipes);
    setLoading(false);
  };

  return [randomRecipes, likesValues, lastMaxValue];
};

export default useGetRandomRecipes;
