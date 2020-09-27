import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Container,
  Button,
} from '@material-ui/core';

import ScrollToResults from '../../utils/ScrollToResults';
import { categoriesId } from '../../utils/scrollRefs.json';
import categoriesWallDesktop from '../../assets/static/categories-desktop.jpg';
import categoriesWallMobile from '../../assets/static/categories-mobile.jpg';

const useStyle = makeStyles((theme) => ({
  hero: {
    width: '100%',
    minHeight: '650px',
    height: '100vh',
    backgroundPosition: 'bottom',
    backgroundImage: `url(${categoriesWallDesktop})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${categoriesWallMobile})`,
    },
  },
  categoriesTitle: {
    [theme.breakpoints.only('xl')]: {
      fontSize: 95,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 55,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 85,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 65,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 47,
    },
  },
  categoriesHeroButton: {
    marginTop: 40,
  },
  link: {
    textDecoration: 'none',
  },
}));

const HeroCategories = (props) => {
  const classes = useStyle();
  const { setResults } = props;

  const handleClick = () => {
    setResults(false);
    ScrollToResults(categoriesId, 'nearest');
  };
  return (
    <Grid
      container
      className={classes.hero}
      alignContent="center"
      justify="center"
    >
      <Container>
        <Typography
          variant="h2"
          color="secondary"
          align="center"
          className={classes.categoriesTitle}
        >
          Search recipes <br /> by categories
        </Typography>
        <Grid
          container
          alignContent="center"
          justify="center"
          className={classes.categoriesHeroButton}
        >
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            size="large"
          >
            Categories
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
};

export default HeroCategories;
