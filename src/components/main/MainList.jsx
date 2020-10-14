import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Container, Typography } from '@material-ui/core';
import useGetRandomRecipes from '../../hooks/useGetRandomRecipes';

import CardSkeleton from '../../utils/LoadingSkeletons';
import CardRecipe from '../../utils/CardRecipe';
import { mainId } from '../../utils/scrollRefs.json';

const useStyle = makeStyles((theme) => ({
  categoriesList: {
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

const MainList = () => {
  const classes = useStyle();
  const [loading, setLoading] = useState(true);
  const [recipesLikes, setRecipesLikes] = useState([]);
  const [randomRecipes, likesValues, lastMaxValue] = useGetRandomRecipes(
    setLoading
  );

  useEffect(() => {
    setRecipesLikes(likesValues);
  }, []);

  return (
    <Grid container className={classes.categoriesList}>
      <Container>
        <Grid container>
          <Grid item xs={12} className={classes.titleContainer}>
            <Typography
              variant="h2"
              color="initial"
              id={mainId}
              className={classes.title}
            >
              Featured
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            {loading ? (
              <CardSkeleton />
            ) : (
              randomRecipes.map((item, index) => (
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

export default MainList;
