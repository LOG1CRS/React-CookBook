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
import RecipeTabs from './RecipeTabs';
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
}));

const DialogInformation = (props) => {
  const { recipe, likes, tabValue, handleTabChange, handleChangeIndex } = props;
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          color="initial"
          className={classes.recipeTitle}
        >
          {recipe.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
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
          <Button size="large" variant="text" disabled startIcon={<Fastfood />}>
            {recipe.servings} portions
          </Button>
        </ButtonGroup>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <Typography
          variant="h2"
          color="initial"
          className={classes.recipeSections}
        >
          Description
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.recipeDescription}>
        <Typography variant="body1" color="initial" component={'span'}>
          <Markup content={recipe.summary} noHtml />
        </Typography>
      </Grid>
      <Divider />
      <Grid item xs={12}>
        <RecipeTabs
          recipe={recipe}
          tabValue={tabValue}
          handleTabChange={handleTabChange}
          handleChangeIndex={handleChangeIndex}
        />
      </Grid>
    </Grid>
  );
};

export default DialogInformation;
