import React from 'react';
import {
  Grid,
  Button,
  makeStyles,
  Typography,
  Hidden,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { home } from '../routes/routes.json';

import notFoundDesktop from '../assets/static/notfound-desktop.jpg';
import notFoundMobile from '../assets/static/notfound-mobile.jpg';

const useStyle = makeStyles((theme) => ({
  notFound: {
    width: '100%',
    minHeight: '650px',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundImage: `url(${notFoundDesktop})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${notFoundMobile})`,
    },
  },
  notFoundTitle: {
    [theme.breakpoints.only('xl')]: {
      fontSize: 85,
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
  mainHeroButton: {
    marginTop: 40,
  },
  link: {
    textDecoration: 'none',
  },
}));

const NotFound = () => {
  const classes = useStyle();
  return (
    <Grid
      container
      className={classes.notFound}
      alignContent="center"
      justify="center"
    >
      <Hidden only="xs">
        <Typography
          variant="h2"
          color="secondary"
          align="center"
          className={classes.notFoundTitle}
        >
          Error 404, Not Found
        </Typography>
      </Hidden>
      <Hidden smUp>
        <Typography
          variant="h2"
          color="secondary"
          align="center"
          className={classes.notFoundTitle}
        >
          Error 404 <br /> Not Found
        </Typography>
      </Hidden>
      <Grid
        container
        alignContent="center"
        justify="center"
        className={classes.mainHeroButton}
      >
        <Link to={home} className={classes.link}>
          <Button variant="contained" color="primary" size="large">
            Return to Home
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default NotFound;
