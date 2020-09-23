import React from 'react';
import { makeStyles, Grid, Container } from '@material-ui/core';
import CategoriesButton from './CategoriesButton';

import mexicanFood from '../../assets/static/mexican-categories.jpg';
import italianFood from '../../assets/static/italian-categories.jpg';
import japaneseFood from '../../assets/static/japanese-categories.jpg';
import americanFood from '../../assets/static/american-categories.jpg';
import spanishFood from '../../assets/static/spanish-categories.jpg';
import chineseFood from '../../assets/static/chinese-categories.jpg';
import koreanFood from '../../assets/static/korean-categories.jpg';
import indianFood from '../../assets/static/indian-categories.jpg';
import frenchFood from '../../assets/static/french-categories.jpg';
import britishFood from '../../assets/static/british-categories.jpg';

const categories = [
  {
    img: mexicanFood,
    title: 'Mexican',
    type: 'mexican',
  },
  {
    img: italianFood,
    title: 'Italian',
    type: 'italian',
  },
  {
    img: japaneseFood,
    title: 'Japanese',
    type: 'japanese',
  },
  {
    img: americanFood,
    title: 'American',
    type: 'american',
  },
  {
    img: spanishFood,
    title: 'Spanish',
    type: 'spanish',
  },
  {
    img: chineseFood,
    title: 'Chinese',
    type: 'chinese',
  },
  {
    img: koreanFood,
    title: 'Korean',
    type: 'korean',
  },
  {
    img: frenchFood,
    title: 'French',
    type: 'french',
  },
  {
    img: indianFood,
    title: 'Indian',
    type: 'indian',
  },
  {
    img: britishFood,
    title: 'British',
    type: 'british',
  },
];

const useStyle = makeStyles((theme) => ({
  categoriesList: {
    width: '100%',
    height: '100vh',
    minHeight: '750px',
  },
}));

const CategoriesList = () => {
  const classes = useStyle();
  return (
    <Container className={classes.categoriesList} id="categories-list">
      <Grid container>
        {categories.map((item, index) => (
          <CategoriesButton {...item} />
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesList;
