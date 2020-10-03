import React, { useEffect } from 'react';
import { Grid, makeStyles, Container, Typography } from '@material-ui/core';
import ScrollToResults from '../../utils/ScrollToResults';
import { searchId } from '../../utils/scrollRefs.json';
import CardSkeleton from '../../utils/LoadingSkeletons';

const useStyle = makeStyles((theme) => ({
  root: {
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

const SearchResults = (props) => {
  const { searchValue } = props;

  const classes = useStyle();

  useEffect(() => {
    ScrollToResults(searchId);
  }, []);

  return (
    <Grid container className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" color="initial" id={searchId}>
              {searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}{' '}
              recipes
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            <CardSkeleton />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default SearchResults;
