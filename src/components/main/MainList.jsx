import React from 'react';
import { makeStyles, Grid, Container, Typography } from '@material-ui/core';

import CardSkeleton from '../../utils/LoadingSkeletons';
import { mainId } from '../../utils/scrollRefs.json';

const useStyle = makeStyles((theme) => ({
  categoriesList: {
    width: '100%',
    minHeight: '100vh',
    [theme.breakpoints.only('xl')]: {
      marginTop: 50,
    },
    [theme.breakpoints.only('lg')]: {
      marginTop: 40,
      marginBottom: 60,
    },
    [theme.breakpoints.only('md')]: {
      marginTop: 80,
      marginBottom: 80,
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 70,
      marginBottom: 70,
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: 55,
      marginBottom: 55,
    },
  },
}));

const MainList = () => {
  const classes = useStyle();
  return (
    <Container className={classes.categoriesList}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" color="initial" id={mainId}>
            Featured
          </Typography>
        </Grid>
        <CardSkeleton />
      </Grid>
    </Container>
  );
};

export default MainList;
