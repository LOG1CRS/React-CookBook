import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ScrollToResults from '../../utils/ScrollToResults';

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    height: '100vh',
  },
}));

const SearchResults = () => {
  const classes = useStyle();
  const searchId = 'search-results';

  useEffect(() => {
    ScrollToResults(searchId);
  }, []);

  return (
    <Grid container className={classes.root} id={searchId}>
      <br />
    </Grid>
  );
};

export default SearchResults;
