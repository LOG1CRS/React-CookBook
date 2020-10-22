import React from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  useTheme,
  Grid,
} from '@material-ui/core';
import useGetRecipeNutrition from '../../hooks/useGetRecipeNutrition';
import SwipeableViews from 'react-swipeable-views';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Grid container>{children}</Grid>
        </Box>
      )}
    </div>
  );
};

const RecipeTabs = (props) => {
  const { recipe, tabValue, handleTabChange, handleChangeIndex } = props;
  const recipeNutrition = useGetRecipeNutrition(recipe.id);

  const theme = useTheme();

  return (
    <>
      <AppBar position="static" color="secondary">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label="Ingredients" />
          <Tab label="Preparation" />
          <Tab label="Nutrition" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis="x"
        index={tabValue}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={tabValue} index={0} dir={theme.direction}>
          <Typography>Ingredients</Typography>

          <ul>
            {recipe.extendedIngredients.map((item, index) => (
              <li key={index}>
                {item.name} - {item.amount} {item.unit}
              </li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel value={tabValue} index={1} dir={theme.direction}>
          <Typography>Preparation</Typography>
          <ol>
            {recipe.analyzedInstructions[0].steps.map((item, index) => (
              <li key={index}>{item.step}</li>
            ))}
          </ol>
        </TabPanel>
        <TabPanel value={tabValue} index={2} dir={theme.direction}>
          <Typography>Nutrition</Typography>
          {recipeNutrition ? (
            <>
              <Typography>Calories: {recipeNutrition.calories}</Typography>
              <Typography>Carbs: {recipeNutrition.carbs}</Typography>
              <Typography>Fat: {recipeNutrition.fat}</Typography>
              <Typography>Protein: {recipeNutrition.protein}</Typography>
              <Typography>Bad</Typography>
              <ul>
                {recipeNutrition.bad.map((item, index) => (
                  <li key={index}>
                    {item.title}: {item.amount}
                  </li>
                ))}
              </ul>
              <Typography>Good</Typography>
              <ul>
                {recipeNutrition.good.map((item, index) => (
                  <li key={index}>
                    {item.title}: {item.amount}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </TabPanel>
      </SwipeableViews>
    </>
  );
};

export default RecipeTabs;
