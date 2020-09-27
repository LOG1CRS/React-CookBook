import React, { useEffect } from 'react';
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';

import { categoriesResultsId } from '../../utils/scrollRefs.json';
import CardSkeleton from '../../utils/LoadingSkeletons';
import ScrollToResults from '../../utils/ScrollToResults';

const useStyle = makeStyles((theme) => ({
  results: {
    minHeight: '100vh',
    width: '100%',
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

const CategoriesResults = (props) => {
  const { foodType } = props;
  const classes = useStyle();

  useEffect(() => {
    ScrollToResults(categoriesResultsId);
  }, []);

  return (
    <Container className={classes.results}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" color="initial" id={categoriesResultsId}>
            {foodType} recipes
          </Typography>
        </Grid>
        <CardSkeleton />
      </Grid>
    </Container>
  );
};

export default CategoriesResults;
