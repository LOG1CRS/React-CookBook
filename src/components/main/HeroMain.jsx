import React from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Container,
  Hidden,
  Button,
} from '@material-ui/core';

import mainWallMobile from '../../assets/static/hero-mobile.jpg';
import mainWallDesktop from '../../assets/static/hero-desktop.jpg';

const useStyle = makeStyles((theme) => ({
  hero: {
    width: '100%',
    minHeight: '650px',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundImage: `url(${mainWallDesktop})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mainWallMobile})`,
    },
  },
  heroTitle: {
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

const HeroMain = () => {
  const classes = useStyle();
  return (
    <>
      <Grid
        container
        className={classes.hero}
        alignContent="center"
        justify="center"
      >
        <Container>
          <Hidden mdDown>
            <Typography
              variant="h2"
              color="secondary"
              align="center"
              className={classes.heroTitle}
            >
              The best recipes website <br /> made with React 💙
            </Typography>
          </Hidden>
          <Hidden lgUp xsDown>
            <Typography
              variant="h2"
              color="secondary"
              align="center"
              className={classes.heroTitle}
            >
              The best recipes <br /> website made with <br /> React 💙
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography
              variant="h2"
              color="secondary"
              align="center"
              className={classes.heroTitle}
            >
              The best <br /> recipes website <br /> made with <br /> React 💙
            </Typography>
          </Hidden>
          <Grid
            container
            alignContent="center"
            justify="center"
            className={classes.mainHeroButton}
          >
            <a href="#main-list" className={classes.link}>
              <Button variant="contained" color="primary" size="large">
                Learn More!
              </Button>
            </a>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default HeroMain;
