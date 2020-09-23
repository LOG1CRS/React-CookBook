import React from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  categoriesList: {
    width: '100%',
    height: '100vh',
    minHeight: '750px',
  },
}));

const MainList = () => {
  const classes = useStyle();
  return (
    <Container className={classes.categoriesList} id="main-list">
      <Grid container>
        <br />
      </Grid>
    </Container>
  );
};

export default MainList;
