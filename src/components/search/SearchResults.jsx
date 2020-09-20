import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ScrollToResults from '../../utils/ScrollToResults';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
  },
}));

const SearchResults = () => {
  const classes = useStyle();

  useEffect(() => {
    ScrollToResults();
  }, []);

  return (
    <Grid container className={classes.root} id="results-view">
      <br />
    </Grid>
  );
};

export default SearchResults;
