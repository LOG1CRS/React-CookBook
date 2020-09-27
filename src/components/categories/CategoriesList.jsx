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
    [theme.breakpoints.only('xl')]: {
      marginTop: 70,
      marginBottom: 70,
    },
    [theme.breakpoints.only('lg')]: {
      marginTop: 60,
      marginBottom: 60,
    },
    [theme.breakpoints.only('md')]: {
      marginTop: 80,
      marginBottom: 80,
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 70,
      marginBottom: 70,
      height: 'auto',
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: 55,
      marginBottom: 55,
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
    <Container className={classes.categoriesList} id={categoriesId}>
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
  );
};

export default CategoriesList;
