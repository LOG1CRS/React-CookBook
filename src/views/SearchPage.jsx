import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const SearchPage = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.toolbar} />
      <p>SearchPage</p>
    </>
  );
};

export default SearchPage;
