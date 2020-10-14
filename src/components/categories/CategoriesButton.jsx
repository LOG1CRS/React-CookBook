import React from 'react';
import { ButtonBase, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  buttonCategories: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: 20,
    maxHeight: 350,
    width: '90%',
    height: '85%',
    [theme.breakpoints.only('sm')]: {
      height: 200,
      marginBottom: 50,
    },
    [theme.breakpoints.only('xs')]: {
      height: 180,
      marginBottom: 40,
    },
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
  title: {
    [theme.breakpoints.only('xl')]: {
      fontSize: 35,
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: 30,
    },
    [theme.breakpoints.only('md')]: {
      fontSize: 45,
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: 32,
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 30,
    },
  },
}));

const CategoriesButton = (props) => {
  const { title, img, type, setResults, setFoodType, setCuisineTitle } = props;
  const classes = useStyle();

  const clickHandler = (cardType) => {
    setFoodType(cardType);
    setCuisineTitle(title);
    setResults(true);
  };

  return (
    <ButtonBase
      onClick={() => clickHandler(type)}
      className={classes.buttonCategories}
      style={{ backgroundImage: `url(${img})` }}
    >
      <Typography variant="h3" color="secondary" className={classes.title}>
        {title}
      </Typography>
    </ButtonBase>
  );
};

export default CategoriesButton;
