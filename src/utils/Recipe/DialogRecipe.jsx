import React, { forwardRef, useState } from 'react';
import {
  Hidden,
  Dialog,
  Slide,
  IconButton,
  Grid,
  DialogContent,
  makeStyles,
  Paper,
  SvgIcon,
  Container,
  DialogTitle,
} from '@material-ui/core';
import { Close, Share } from '@material-ui/icons';
import { mainRoute } from '../../routes/routes.json';
import DialogInformation from './DialogInformation';
import RecipeTabs from './RecipeTabs';

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
    borderRadius: '40px 40px 0 0',
    boxShadow: '0 -6px 6px rgba(0,0,0,0.16)',
    paddingTop: 35,
    [theme.breakpoints.only('sm')]: {
      paddingTop: 30,
    },
  },
  dialogActionsContainer: {
    [theme.breakpoints.only('sm')]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
    [theme.breakpoints.only('md')]: {
      paddingLeft: 8,
      paddingRight: 8,
    },
  },
  dialogDesktop: {
    borderRadius: 20,
  },
  dialogDesktopClose: {
    paddingTop: 0,
  },
  // dialogDesktopShare: {
  //   paddingTop: 5,
  //   position: 'absolute',
  //   left: 32,
  // },
  dialogDesktopImg: {
    width: 200,
  },
  dialogImg: {
    height: 400,
    borderRadius: 30,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  mainInformation: {
    paddingLeft: 30,
  },
  tabsContainer: {
    [theme.breakpoints.only('xs')]: {
      marginTop: 25,
    },
    marginTop: 20,
  },
  link: {
    color: 'inherit',
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

  const handleShareRecipe = (e) => {
    e.preventDefault();

    if (!navigator.share) {
      navigator.clipboard.writeText(`${mainRoute}${recipe.id}`);
      alert(`Recipe copy to clipboard! ${mainRoute}${recipe.id}`);
      return;
    }

    navigator.share({
      title: `${recipe.title}`,
      text: `A friend has shared a recipe with you! by: React Cookbook`,
      url: `${mainRoute}${recipe.id}`,
    });
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
            <Grid container className={classes.dialogActionsContainer}>
              <Grid item xs={6}>
                <Grid container justify="flex-start">
                  <a
                    href="/#"
                    onClick={handleShareRecipe}
                    className={classes.link}
                  >
                    <IconButton edge="end" color="secondary" size="medium">
                      <SvgIcon
                        component={Share}
                        fontSize="large"
                        stroke="black"
                        strokeWidth={1}
                        strokeLinecap="round"
                      />
                    </IconButton>
                  </a>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container justify="flex-end">
                  <IconButton
                    edge="start"
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
              </Grid>
            </Grid>
          </Grid>
          <Paper elevation={0} className={classes.content}>
            <Container>
              <DialogInformation recipe={recipe} likes={likes} />
              <Grid container>
                <Grid item xs={12} className={classes.tabsContainer}>
                  <RecipeTabs
                    recipe={recipe}
                    tabValue={tabValue}
                    handleTabChange={handleTabChange}
                    handleChangeIndex={handleChangeIndex}
                  />
                </Grid>
              </Grid>
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
            <Grid container>
              <Grid item xs={6}>
                <Grid container justify="flex-start">
                  <a
                    href="/#"
                    onClick={handleShareRecipe}
                    className={classes.link}
                  >
                    <IconButton edge="start" color="inherit" size="medium">
                      <Share fontSize="default" />
                    </IconButton>
                  </a>
                </Grid>
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
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
              <Grid item xs={7} className={classes.mainInformation}>
                <DialogInformation recipe={recipe} likes={likes} />
              </Grid>
              <Grid item xs={12} className={classes.tabsContainer}>
                <RecipeTabs
                  recipe={recipe}
                  tabValue={tabValue}
                  handleTabChange={handleTabChange}
                  handleChangeIndex={handleChangeIndex}
                />
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Hidden>
    </>
  );
};

export default DialogRecipe;
