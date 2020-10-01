import React, { useEffect } from 'react';
import { Grid, Container, makeStyles, Typography } from '@material-ui/core';

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

const CategoriesResults = (props) => {
  const { foodType } = props;
  const classes = useStyle();

  useEffect(() => {
    ScrollToResults(categoriesResultsId);
  }, []);

  return (
    <Grid container className={classes.results}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" color="initial" id={categoriesResultsId}>
              {foodType} recipes
            </Typography>
          </Grid>
          <CardSkeleton />
        </Grid>
      </Container>
    </Grid>
  );
};

export default CategoriesResults;
