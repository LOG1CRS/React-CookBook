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
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  cardImg: {
    width: '100%',
    height: 340,
    backgroundPosition: 'center',
    backgroundSize: 'center',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    position: 'relative',
    bottom: 40,
    width: '100%',
    height: '100%',
    borderRadius: '40px 40px 0 0',
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogRecipe = (props) => {
  const { open, handleClose, recipe, likes } = props;
  const classes = useStyle();

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
          <Grid
            container
            style={{ backgroundImage: `url(${recipe.image})` }}
            className={classes.cardImg}
          >
            <AppBar color="transparent" elevation={0}>
              <Toolbar>
                <Grid container justify="flex-end">
                  <IconButton
                    edge="end"
                    color="secondary"
                    size="medium"
                    onClick={handleClose}
                  >
                    <Close fontSize="large" />
                  </IconButton>
                </Grid>
              </Toolbar>
            </AppBar>
          </Grid>
          <Paper elevation={0} className={classes.content}></Paper>
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
