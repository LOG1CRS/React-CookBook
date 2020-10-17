import { useEffect } from 'react';
import useGetLikes from './useGetLikes';

const useGetRandomRecipes = (
  setLoading,
  page,
  randomRecipes,
  setRandomRecipes,
  lastMaxValue,
  setLastMaxValue
) => {
  const { REACT_APP_API_KEY } = process.env;

  if (lastMaxValue === null) {
    lastMaxValue = 30000;
  }

  const [likesValues, lastLikesVaue] = useGetLikes(12, lastMaxValue, 1000);

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
