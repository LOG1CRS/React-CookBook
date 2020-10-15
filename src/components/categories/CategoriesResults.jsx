import React, { useEffect, useState } from 'react';
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import useGetCuisineRecipes from '../../hooks/useGetCuisineRecipes';
import CardRecipe from '../../utils/CardRecipe';

import { categoriesResultsId } from '../../utils/scrollRefs.json';
import CardSkeleton from '../../utils/LoadingSkeletons';
import ScrollToResults from '../../utils/ScrollToResults';

const useStyle = makeStyles((theme) => ({
  results: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.only('xl')]: {
      paddingTop: 50,
      paddingBottom: 50,
    },
    [theme.breakpoints.only('lg')]: {
      paddingTop: 40,
      paddingBottom: 60,
    },
    [theme.breakpoints.only('md')]: {
      paddingTop: 80,
      paddingBottom: 80,
    },
    [theme.breakpoints.only('sm')]: {
      paddingTop: 70,
      paddingBottom: 70,
    },
    [theme.breakpoints.only('xs')]: {
      paddingTop: 55,
      paddingBottom: 55,
    },
  },
  title: {
    [theme.breakpoints.only('xl')]: {
      fontSize: 60,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 53,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 70,
      marginLeft: 57,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 60,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 45,
    },
  },
  titleContainer: {
    marginBottom: 25,
    [theme.breakpoints.down('md')]: {
      marginBottom: 30,
    },
  },
}));

const CategoriesResults = (props) => {
  const { foodType, cuisineTitle } = props;
  const classes = useStyle();

  const [loading, setLoading] = useState(true);
  const [recipesLikes, setRecipesLikes] = useState([]);
  const [cuisineRecipes, likesValues, lastMaxValue] = useGetCuisineRecipes(
    foodType,
    setLoading
  );

  useEffect(() => {
    ScrollToResults(categoriesResultsId);
    setRecipesLikes(likesValues);
  }, []);

  return (
    <Grid container className={classes.results}>
      <Container>
        <Grid container>
          <Grid item xs={12} className={classes.titleContainer}>
            <Typography
              variant="h2"
              color="initial"
              id={categoriesResultsId}
              className={classes.title}
            >
              {cuisineTitle} recipes
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            {loading || cuisineRecipes === undefined ? (
              <CardSkeleton />
            ) : (
              cuisineRecipes.map((item, index) => (
                <CardRecipe
                  key={index}
                  title={item.title}
                  likes={recipesLikes[index]}
                  time={item.readyInMinutes}
                  img={item.image}
                />
              ))
            )}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default CategoriesResults;
