import { useEffect, useState, useRef } from 'react';
import getLikes from '../utils/getLikes';

const useGetRandomRecipes = (
  setLoading,
  page,
  randomRecipes,
  setRandomRecipes
) => {
  const { REACT_APP_API_KEY } = process.env;

  const [maxLikes, setMaxLikes] = useState(50000);
  const likesValues = useRef([]);

  useEffect(() => {
    const [likes, lastLikesValue] = getLikes(12, maxLikes, 300);
    setMaxLikes(lastLikesValue);
    likesValues.current = likes;

    getRandomRecipe();
  }, [page]);

  const getRandomRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=12`
    );
    const data = await response.json();

    if (!data.code || data === undefined) {
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
