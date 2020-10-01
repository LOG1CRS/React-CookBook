import React from 'react';
import { makeStyles, Grid, Container, Typography } from '@material-ui/core';

import CardSkeleton from '../../utils/LoadingSkeletons';
import CardRecipe from '../../utils/CardRecipe';
import { mainId } from '../../utils/scrollRefs.json';

import testImg from '../../assets/static/hero-desktop.jpg';

const useStyle = makeStyles((theme) => ({
  categoriesList: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.only('xl')]: {
      paddingTop: 50,
      paddingBottom: 30,
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
}));

const MainList = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.categoriesList}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" color="initial" id={mainId}>
              Featured
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            <CardSkeleton />
            <CardRecipe
              title={'Recipe test'}
              likes={900}
              time={20}
              img={testImg}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default MainList;
