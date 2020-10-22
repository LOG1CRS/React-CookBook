import React, { useEffect, useState, useRef } from 'react';
import { Grid, makeStyles, Container, Typography } from '@material-ui/core';
import ScrollToResults from '../../utils/ScrollToResults';
import { searchId } from '../../utils/scrollRefs.json';
import CardSkeleton from '../../utils/LoadingSkeletons';
import useGetSearchedRecipe from '../../hooks/useGetSearchedRecipe';
import CardRecipe from '../../utils/Recipe/CardRecipe';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
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
  titleNotFound: {
    color: '#c9c9c9',
    marginTop: 100,
    [theme.breakpoints.only('xl')]: {
      fontSize: 50,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 43,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 60,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 50,
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: 75,
      fontSize: 35,
    },
  },
  titleContainer: {
    marginBottom: 25,
    [theme.breakpoints.down('md')]: {
      marginBottom: 30,
    },
  },
}));

const SearchResults = (props) => {
  const { searchValue } = props;
  const classes = useStyle();

  const loader = useRef(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [recipesLikes, setRecipesLikes] = useState([]);
  const [recipesResults, setRecipesResults] = useState([]);
  const [searchedRecipes, likesValues, lastMaxValue] = useGetSearchedRecipe(
    searchValue,
    setLoading
  );

  useEffect(() => {
    let step = 12 * page;

    if (step > searchedRecipes.length) {
      step = searchedRecipes.length;
    }

    setRecipesResults(searchedRecipes.slice(0, step));
  }, [page, searchedRecipes]);

  useEffect(() => {
    ScrollToResults(searchId);
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
      <Grid container className={classes.root}>
        <Container>
          <Grid container>
            <Grid item xs={12} className={classes.titleContainer}>
              <Typography
                variant="h2"
                color="initial"
                id={searchId}
                className={classes.title}
              >
                {searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}{' '}
                recipes
              </Typography>
            </Grid>
            <Grid container spacing={4}>
              {loading ? (
                <CardSkeleton />
              ) : recipesResults.length !== 0 ? (
                recipesResults.map((item, index) => (
                  <CardRecipe
                    key={index}
                    recipe={item}
                    likes={recipesLikes[index]}
                  />
                ))
              ) : (
                <Grid container justify="center" alignContent="center">
                  <Typography
                    variant="h1"
                    color="initial"
                    align="center"
                    className={classes.titleNotFound}
                  >
                    No recipes found for your search
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <div ref={loader} />
    </>
  );
};

export default SearchResults;
