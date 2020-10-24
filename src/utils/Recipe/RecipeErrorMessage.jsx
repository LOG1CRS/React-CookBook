import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  messageContainer: {
    height: 300,
  },
  message: {
    color: '#c9c9c9',
  },
}));

const RecipeErrorMessage = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.messageContainer}>
      <Typography variant="h2" className={classes.message}>
        Ups! An error has occurred
      </Typography>
    </Grid>
  );
};

export default RecipeErrorMessage;
