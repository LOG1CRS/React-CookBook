import { useEffect, useState } from 'react';

const useGetRecipeNutrition = (recipeId) => {
  const { REACT_APP_API_KEY } = process.env;

  const [recipeNutrition, setRecipeNutrition] = useState();

  useEffect(() => {
    getNutrition();
  }, []);

  const getNutrition = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${REACT_APP_API_KEY}`
    );

    const nutrition = await response.json();
    setRecipeNutrition(nutrition);
  };

  return recipeNutrition;
};

export default useGetRecipeNutrition;
