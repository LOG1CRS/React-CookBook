import React from 'react';
import { Hidden, Grid, Typography, makeStyles } from '@material-ui/core';

import mobileImg from '../../assets/static/hero-mobile.jpg';
import desktopImg from '../../assets/static/hero-desktop.jpg';

const useStyle = makeStyles((theme) => ({
  hero: {
    width: '100%',
    height: `calc(100vh - 63px)`,
    backgroundPosition: 'center',
    backgroundImage: `url(${desktopImg})`,
    backgroundSize: 'cover',
    [theme.breakpoints.only('xs')]: {
      height: 'calc(100vh - 55px)',
    },
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileImg})`,
    },
  },
}));

const Hero = () => {
  const classes = useStyle();
  return (
    <>
      <Hidden mdDown>
        <Grid
          container
          className={classes.hero}
          alignContent="center"
          justify="center"
        >
          <Typography variant="h2" color="secondary">
            Desktop
          </Typography>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <Grid
          container
          className={classes.hero}
          alignContent="center"
          justify="center"
        >
          <Typography variant="h2" color="secondary">
            Mobile
          </Typography>
        </Grid>
      </Hidden>
    </>
  );
};

export default Hero;
