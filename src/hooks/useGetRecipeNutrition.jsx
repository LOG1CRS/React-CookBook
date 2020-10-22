import { useEffect, useState } from 'react';

const useGetRecipeNutrition = (recipeId, setLoading) => {
  const { REACT_APP_API_KEY } = process.env;

  const [recipeNutrition, setRecipeNutrition] = useState();

  useEffect(() => {
    getNutrition();
  }, []);

  const getNutrition = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${REACT_APP_API_KEY}`
    );

    const data = await response.json();

    if (!data.code || data === undefined) {
      setRecipeNutrition(data);
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  return recipeNutrition;
};

export default useGetRecipeNutrition;
