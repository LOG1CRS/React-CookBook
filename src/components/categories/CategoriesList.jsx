import React from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';
import CategoriesButton from './CategoriesButton';
import categories from './categories';

import { categoriesId } from '../../utils/scrollRefs.json';

const useStyle = makeStyles((theme) => ({
  categoriesList: {
    width: '100%',
    height: '100vh',
    minHeight: '750px',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.only('xl')]: {
      paddingTop: 70,
      paddingBottom: 70,
    },
    [theme.breakpoints.only('lg')]: {
      paddingTop: 60,
      paddingBottom: 60,
    },
    [theme.breakpoints.only('md')]: {
      paddingTop: 80,
      paddingBottom: 80,
    },
    [theme.breakpoints.only('sm')]: {
      paddingTop: 70,
      paddingBottom: 70,
      height: 'auto',
    },
    [theme.breakpoints.only('xs')]: {
      paddingTop: 55,
      paddingBottom: 55,
      height: 'auto',
    },
  },
  categoriesContainer: {
    width: '100%',
    height: '100%',
  },
  categoriesButton: {
    width: '100%',
    height: '100%',
  },
}));

const CategoriesList = (props) => {
  const { setResults, setFoodType } = props;
  const classes = useStyle();
  return (
    <Grid container className={classes.categoriesList}>
      <Container id={categoriesId}>
        <Grid
          container
          className={classes.categoriesContainer}
          justify="space-evenly"
        >
          {categories.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} lg={3}>
              <Grid
                container
                justify="center"
                alignContent="center"
                className={classes.categoriesButton}
              >
                <CategoriesButton
                  {...item}
                  setResults={setResults}
                  setFoodType={setFoodType}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default CategoriesList;
