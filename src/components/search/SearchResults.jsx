import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, Container, Typography } from '@material-ui/core';
import ScrollToResults from '../../utils/ScrollToResults';
import { searchId } from '../../utils/scrollRefs.json';
import CardSkeleton from '../../utils/LoadingSkeletons';
import useGetSearchedRecipe from '../../hooks/useGetSearchedRecipe';
import CardRecipe from '../../utils/CardRecipe';
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

  const [loading, setLoading] = useState(true);
  const [recipesLikes, setRecipesLikes] = useState([]);
  const [searchedRecipes, likesValues, lastMaxValue] = useGetSearchedRecipe(
    searchValue,
    setLoading
  );

  useEffect(() => {
    ScrollToResults(searchId);
    setRecipesLikes(likesValues);
  }, []);

  return (
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
            ) : (
              searchedRecipes.map((item, index) => (
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

export default SearchResults;
