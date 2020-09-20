import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  IconButton,
  Typography,
  Paper,
  InputBase,
  Divider,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ScrollToTop from '../../utils/ScrollToResults';

import searchWallDesktop from '../../assets/static/search-desktop.jpg';
import searchWallMobile from '../../assets/static/search-mobile.jpg';
import SearchMessage from './SearchMessage';

const useStyle = makeStyles((theme) => ({
  hero: {
    width: '100%',
    minHeight: '650px',
    height: '100vh',
    backgroundPosition: 'top',
    backgroundImage: `url(${searchWallDesktop})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${searchWallMobile})`,
      backgroundPosition: 'center',
    },
  },
  searchTitle: {
    [theme.breakpoints.only('xl')]: {
      fontSize: 85,
      marginBottom: 65,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 62,
      marginBottom: 45,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 95,
      marginBottom: 0,
      padding: '0 80px 80px 80px',
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 75,
      padding: '0 70px 70px 70px',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 55,
      marginBottom: 35,
      padding: '0 20px 20px 20px',
    },
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.only('xl')]: {
      width: 1000,
      padding: '4px 8px',
    },
    [theme.breakpoints.only('lg')]: {
      width: 720,
    },
    [theme.breakpoints.only('md')]: {
      width: 750,
      padding: '8px 15px',
    },
    [theme.breakpoints.only('sm')]: {
      width: 550,
    },
    [theme.breakpoints.only('xs')]: {
      width: '90%',
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    paddingLeft: 2,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const HeroSearch = (props) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);

  const { handleResults, valueResults } = props;
  const classes = useStyle();

  const handleErrorMessage = () => {
    setErrorMessage(!errorMessage);
  };

  const handleWarningMessage = () => {
    setWarningMessage(!warningMessage);
  };

  const handleScroll = () => {
    if (valueResults) {
      ScrollToTop();
    } else {
      handleResults(true);
    }
  };

  const inputValidation = () => {
    const inputValue = document.getElementById('input-search').value.trim();

    if (inputValue !== '') {
      return inputValue;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputValidation();
    if (inputValue) {
      handleScroll();
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <Grid
      container
      className={classes.hero}
      alignContent="center"
      justify="center"
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            color="secondary"
            align="center"
            className={classes.searchTitle}
          >
            What do you want to eat today?
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.inputContainer}>
          <Paper
            component="form"
            className={classes.searchInput}
            onSubmit={(e) => handleSubmit(e)}
          >
            <InputBase
              placeholder="Type the name of a food or recipe"
              id="input-search"
              className={classes.input}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              className={classes.iconButton}
              onClick={(e) => handleSubmit(e)}
            >
              <Search />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <SearchMessage
        severity="error"
        open={errorMessage}
        handleClose={handleErrorMessage}
        message="Please type a valid value"
      />
      <SearchMessage
        severity="warning"
        open={warningMessage}
        handleClose={handleWarningMessage}
      />
    </Grid>
  );
};

export default HeroSearch;
