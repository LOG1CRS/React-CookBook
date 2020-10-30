import React, { useEffect, useState, useRef } from 'react';
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';
import useGetCuisineRecipes from '../../hooks/useGetCuisineRecipes';
import CardRecipe from '../Recipe/CardRecipe';

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

  const loader = useRef(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [recipesLikes, setRecipesLikes] = useState([]);
  const [recipesResults, setRecipesResults] = useState([]);
  const [cuisineRecipes, likesValues, lastMaxValue] = useGetCuisineRecipes(
    foodType,
    setLoading
  );

  useEffect(() => {
    let step = 12 * page;

    if (step > cuisineRecipes.length) {
      step = cuisineRecipes.length;
    }

    setRecipesResults(cuisineRecipes.slice(0, step));
  }, [page, cuisineRecipes]);

  useEffect(() => {
    ScrollToResults(categoriesResultsId);
    setRecipesLikes(likesValues);

    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      setRecipesResults([]);
    };
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  return (
    <>
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
              {loading ? (
                <CardSkeleton />
              ) : (
                recipesResults.map((item, index) => (
                  <CardRecipe
                    key={index}
                    recipe={item}
                    likes={recipesLikes[index]}
                  />
                ))
              )}
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <div ref={loader} />
    </>
  );
};

export default CategoriesResults;
