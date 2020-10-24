import React from 'react';
import {
  Grid,
  Typography,
  ButtonGroup,
  Button,
  Divider,
  makeStyles,
} from '@material-ui/core';
import { Markup } from 'interweave';
import { FavoriteBorder, AccessTime, Fastfood } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  recipeTitle: {
    fontSize: 30,
    [theme.breakpoints.only('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 30,
    },
  },
  recipeAuthor: {
    fontSize: 25,
    [theme.breakpoints.only('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 30,
    },
  },
  recipeSections: {
    fontSize: 30,
    [theme.breakpoints.only('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 30,
    },
  },
  sectionsSpace: {
    [theme.breakpoints.only('xs')]: {
      marginBottom: 25,
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: 30,
    },
    [theme.breakpoints.only('md')]: {
      marginBottom: 60,
    },
    [theme.breakpoints.only('lg')]: {
      marginBottom: 20,
    },
    [theme.breakpoints.only('xl')]: {
      marginBottom: 30,
    },
  },
  contentSpace: {
    marginBottom: 10,
    [theme.breakpoints.only('md')]: {
      marginBottom: 15,
    },
    [theme.breakpoints.only('lg')]: {
      marginBottom: 7,
    },
  },
}));

const DialogInformation = (props) => {
  const { recipe, likes } = props;
  const classes = useStyle();
  return (
    <Grid container>
      <Grid container className={classes.sectionsSpace}>
        <Grid item xs={12} className={classes.contentSpace}>
          <Typography
            variant="h1"
            color="initial"
            className={classes.recipeTitle}
          >
            {recipe.title}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.contentSpace}>
          <Typography
            variant="h3"
            color="initial"
            className={classes.recipeAuthor}
          >
            Author: {recipe.sourceName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup>
            <Button
              size="large"
              variant="text"
              disabled
              startIcon={<FavoriteBorder />}
            >
              {likes}
            </Button>
            <Button
              size="large"
              variant="text"
              disabled
              startIcon={<AccessTime />}
            >
              {recipe.readyInMinutes} min
            </Button>
            <Button
              size="large"
              variant="text"
              disabled
              startIcon={<Fastfood />}
            >
              {recipe.servings} portions
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Divider />
      <Grid container className={classes.sectionsSpace}>
        <Grid item xs={12} className={classes.contentSpace}>
          <Typography
            variant="h2"
            color="initial"
            className={classes.recipeSections}
          >
            Description
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.recipeDescription}>
          <Typography
            variant="body1"
            color="initial"
            component={'span'}
            className={classes.contentSpace}
            align="justify"
          >
            <Markup content={recipe.summary} noHtml />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DialogInformation;
