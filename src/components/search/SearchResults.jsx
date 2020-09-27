import React, { useEffect } from 'react';
import { Grid, makeStyles, Container, Typography } from '@material-ui/core';
import ScrollToResults from '../../utils/ScrollToResults';
import { searchId } from '../../utils/scrollRefs.json';
import CardSkeleton from '../../utils/LoadingSkeletons';

const useStyle = makeStyles((theme) => ({
  root: {
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

const SearchResults = (props) => {
  const { searchValue } = props;

  const classes = useStyle();

  useEffect(() => {
    ScrollToResults(searchId);
  }, []);

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" color="initial" id={searchId}>
            {searchValue.charAt(0).toUpperCase() + searchValue.slice(1)} recipes
          </Typography>
        </Grid>
        <CardSkeleton />
      </Grid>
    </Container>
  );
};

export default SearchResults;
