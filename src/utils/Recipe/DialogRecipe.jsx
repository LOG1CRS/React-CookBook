import React, { forwardRef, useState } from 'react';
import {
  Hidden,
  Dialog,
  Slide,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
  DialogContent,
  makeStyles,
  Paper,
  SvgIcon,
  Container,
  DialogTitle,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import DialogInformation from './DialogInformation';

const useStyle = makeStyles((theme) => ({
  cardImg: {
    width: '100%',
    height: 340,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#d5d5d5',
    [theme.breakpoints.only('sm')]: {
      height: 380,
    },
    [theme.breakpoints.only('md')]: {
      height: 450,
    },
  },
  content: {
    position: 'relative',
    bottom: 40,
    width: '100%',
    height: '100%',
    borderRadius: '40px 40px 0 0',
    boxShadow: '0 -6px 6px rgba(0,0,0,0.16)',
    paddingTop: 35,
    [theme.breakpoints.only('sm')]: {
      paddingTop: 20,
    },
    [theme.breakpoints.only('md')]: {
      paddingTop: 20,
    },
  },
  dialogDesktop: {
    borderRadius: 20,
  },
  dialogDesktopClose: {
    paddingTop: 0,
  },
  dialogDesktopImg: {
    width: 200,
  },
  dialogImg: {
    height: 400,
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogRecipe = (props) => {
  const { open, handleClose, recipe, likes } = props;
  const classes = useStyle();

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  const handleChangeIndex = (index) => {
    setTabValue(index);
  };

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
            style={{
              backgroundImage: `url(https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg)`,
            }}
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
                    <SvgIcon
                      component={Close}
                      fontSize="large"
                      stroke="black"
                      strokeWidth={1}
                      strokeLinecap="round"
                    />
                  </IconButton>
                </Grid>
              </Toolbar>
            </AppBar>
          </Grid>
          <Paper elevation={0} className={classes.content}>
            <Container>
              <DialogInformation
                recipe={recipe}
                likes={likes}
                tabValue={tabValue}
                handleTabChange={handleTabChange}
                handleChangeIndex={handleChangeIndex}
              />
            </Container>
          </Paper>
        </Dialog>
      </Hidden>
      <Hidden mdDown>
        <Dialog
          fullWidth
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          classes={{ paper: classes.dialogDesktop }}
        >
          <DialogTitle>
            <Grid container justify="flex-end">
              <IconButton
                edge="end"
                color="inherit"
                size="medium"
                className={classes.dialogDesktopClose}
                onClick={handleClose}
              >
                <Close fontSize="large" />
              </IconButton>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid
                item
                xs={5}
                className={classes.dialogImg}
                style={{
                  backgroundImage: `url(https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg)`,
                }}
              />
              <Grid item xs={7}>
                <Grid container>
                  <DialogInformation
                    recipe={recipe}
                    likes={likes}
                    tabValue={tabValue}
                    handleTabChange={handleTabChange}
                    handleChangeIndex={handleChangeIndex}
                  />
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Hidden>
    </>
  );
};

export default DialogRecipe;
