import React, { forwardRef } from 'react';
import {
  Hidden,
  Dialog,
  Slide,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogRecipe = (props) => {
  const { open, handleClose } = props;
  return (
    <>
      <Hidden lgUp>
        <Dialog
          fullScreen
          scroll={'body'}
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar color="transparent" elevation={0}>
            <Toolbar>
              <Grid container justify="flex-end">
                <IconButton edge="end" color="primary" onClick={handleClose}>
                  <Close />
                </IconButton>
              </Grid>
            </Toolbar>
          </AppBar>
        </Dialog>
      </Hidden>
      <Hidden mdDown>
        <Dialog
          fullWidth
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Hidden>
    </>
  );
};

export default DialogRecipe;
