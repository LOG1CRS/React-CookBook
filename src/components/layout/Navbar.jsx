import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Button,
} from '@material-ui/core';
import {
  Menu,
  Search,
  GitHub,
  AllInbox,
  Brightness7,
  Brightness5,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { home, repo, search, categories } from '../../routes/routes.json';

import navbarImg from '../../assets/static/cookbook-icon.png';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

const Navbar = (props) => {
  const classes = useStyle();
  return (
    <>
      <AppBar position="fixed" color="primary">
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
            <IconButton color="secondary">
              <Brightness5 />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
