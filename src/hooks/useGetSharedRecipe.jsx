import { useEffect, useState } from 'react';
import getLikes from '../utils/getLikes';

const useGetSharedRecipe = (id, setOpenDialog) => {
  const { REACT_APP_API_KEY } = process.env;

  const [sharedRecipe, setSharedRecipe] = useState(null);

  const [likes, lastLikesValue] = getLikes(1, 20000, 10000);

  useEffect(() => {
    getSharedRecipe();
  }, [id]);

  const getSharedRecipe = async () => {
    if (id === undefined) {
      setOpenDialog(false);
      return;
    }

    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${REACT_APP_API_KEY}`
    );
    const data = await response.json();

    if (!data.code || data === undefined) {
      setOpenDialog(true);
      setSharedRecipe(data);
    } else {
      setOpenDialog(false);
    }
  };

  return [sharedRecipe, likes];
};

export default useGetSharedRecipe;
