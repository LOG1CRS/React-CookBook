import React from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  Button,
  Container,
  Hidden,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Search, GitHub, AllInbox } from '@material-ui/icons';
import { home, repo, search, categories } from '../../routes/routes.json';

import footerImg from '../../assets/static/cookbook-icon.png';

const useStyle = makeStyles((theme) => ({
  footer: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.only('xl')]: {
      height: 300,
    },
    [theme.breakpoints.down('lg')]: {
      height: 250,
    },
    [theme.breakpoints.only('xs')]: {
      height: 350,
    },
  },
  footerLogo: {
    [theme.breakpoints.only('xl')]: {
      fontSize: 26,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 23,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 27,
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
  footerImg: {
    [theme.breakpoints.only('xl')]: {
      width: 70,
    },
    [theme.breakpoints.down('lg')]: {
      width: 60,
    },
  },
  footerImgContainer: {
    height: '40%',
    [theme.breakpoints.only('xs')]: {
      height: '30%',
    },
  },
  footerTitleContainer: {
    height: '10%',
  },
  footerMenuContainer: {
    height: '40%',
    [theme.breakpoints.only('xs')]: {
      height: '50%',
    },
  },
  footerLicenseContainer: {
    height: '10%',
  },
  footerMenuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      marginTop: 6,
      marginBottom: 6,
    },
  },
  footerLicense: {
    fontSize: 13,
  },
  container: {
    height: '100%',
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.footer}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.footerImgContainer}
      >
        <Link to={home}>
          <img src={footerImg} alt="" className={classes.footerImg} />
        </Link>
      </Grid>
      <Grid
        container
        className={classes.footerTitleContainer}
        alignItems="center"
        justify="center"
      >
        <Typography
          variant="h1"
          color="secondary"
          align="center"
          className={classes.footerLogo}
        >
          <Link to={home} className={classes.link}>
            React CookBook
          </Link>
        </Typography>
      </Grid>
      <Grid
        container
        className={classes.footerMenuContainer}
        alignItems="center"
        justify="space-evenly"
      >
        <Hidden only="xs">
          <Container fixed>
            <Grid container>
              <Grid item sm={4} className={classes.footerMenuItem}>
                <Link to={search} className={classes.link}>
                  <Button
                    variant="text"
                    color="secondary"
                    size="large"
                    startIcon={<Search />}
                  >
                    Search
                  </Button>
                </Link>
              </Grid>
              <Grid item sm={4} className={classes.footerMenuItem}>
                <Link to={categories} className={classes.link}>
                  <Button
                    variant="text"
                    color="secondary"
                    size="large"
                    startIcon={<AllInbox />}
                  >
                    Categories
                  </Button>
                </Link>
              </Grid>
              <Grid item sm={4} className={classes.footerMenuItem}>
                <a
                  href={repo}
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="text"
                    color="secondary"
                    size="large"
                    startIcon={<GitHub />}
                  >
                    Repository
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Container>
        </Hidden>
        <Hidden smUp>
          <Grid container>
            <Grid item xs={12} className={classes.footerMenuItem}>
              <Link to={search} className={classes.link}>
                <Button variant="text" color="secondary" size="medium">
                  Search
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} className={classes.footerMenuItem}>
              <Link to={categories} className={classes.link}>
                <Button variant="text" color="secondary" size="medium">
                  Categories
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} className={classes.footerMenuItem}>
              <a
                href={repo}
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="text" color="secondary" size="medium">
                  Repository
                </Button>
              </a>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        container
        className={classes.footerLicenseContainer}
        alignItems="center"
        justify="center"
      >
        <Typography
          variant="body1"
          color="secondary"
          className={classes.footerLicense}
        >
          &copy; MIT License
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
