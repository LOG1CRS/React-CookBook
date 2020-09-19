import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const CategoriesPage = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.toolbar} />
      <p>Categories Page</p>
    </>
  );
};

export default CategoriesPage;
