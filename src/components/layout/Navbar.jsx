import React, { cloneElement } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Button,
  useScrollTrigger,
} from '@material-ui/core';
import { Menu, Search, GitHub, AllInbox } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { home, repo, search, categories } from '../../routes/routes.json';

import navbarImg from '../../assets/static/cookbook-icon.png';

const useStyle = makeStyles((theme) => ({
  appbar: {
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.complex,
    }),
  },
  logoTitle: {
    [theme.breakpoints.only('xl')]: {
      fontSize: 26,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 23,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 20,
    },
  },
  logoNavbar: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    marginLeft: 18,
  },
  menuButton: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    paddingRight: 5,
  },
  linkTitile: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
  navbarImg: {
    width: 45,
    marginRight: 10,
    [theme.breakpoints.down('lg')]: {
      width: 40,
    },
    [theme.breakpoints.only('xs')]: {
      width: 35,
    },
  },
}));

const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
    color: trigger ? 'primary' : 'transparent',
  });
};

const Navbar = (props) => {
  const classes = useStyle();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar>
            <div className={classes.logoNavbar}>
              <Link to={home}>
                <img src={navbarImg} alt="Logo" className={classes.navbarImg} />
              </Link>
              <Typography
                variant="h1"
                color="secondary"
                className={classes.logoTitle}
              >
                <Link to={home} className={classes.linkTitile}>
                  React CookBook
                </Link>
              </Typography>
            </div>
            <Hidden lgUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="secondary"
                aria-label="menu"
                size="medium"
                onClick={() => props.toggleOpen()}
              >
                <Menu />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
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
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Navbar;
