import React from 'react';
import { Snackbar, IconButton, makeStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

const useStyle = makeStyles((theme) => ({
  message: {
    bottom: 50,
  },
}));

const action = (handleClose) => {
  return (
    <IconButton onClick={handleClose} color="secondary" size="small">
      <Close />
    </IconButton>
  );
};

const SearchMessage = (props) => {
  const { severity, open, handleClose, message } = props;

  const classes = useStyle();

  return (
    <Snackbar
      autoHideDuration={4500}
      open={open}
      onClose={handleClose}
      className={classes.message}
    >
      <Alert variant="filled" severity={severity} action={action(handleClose)}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SearchMessage;
