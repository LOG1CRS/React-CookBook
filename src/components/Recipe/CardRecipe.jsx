import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  CardActionArea,
  Button,
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import { FavoriteBorder, AccessTime } from '@material-ui/icons';
import DialogRecipe from './DialogRecipe';

const useStyle = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: 270,
    maxWidth: 350,
    borderRadius: 25,
    [theme.breakpoints.down('md')]: {
      height: 320,
    },
    [theme.breakpoints.only('xs')]: {
      height: 290,
    },
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardImage: {
    backgroundColor: '#d5d5d5',
    width: '100%',
    height: 180,
    [theme.breakpoints.down('md')]: {
      height: 210,
    },
    [theme.breakpoints.only('xs')]: {
      height: 190,
    },
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: 0,
    width: '90%',
    height: 45,
    [theme.breakpoints.down('md')]: {
      height: 55,
    },
    [theme.breakpoints.only('xs')]: {
      height: 50,
    },
  },
  cardTitle: {
    color: '#979797',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    [theme.breakpoints.only('xs')]: {
      width: 310,
      marginTop: 10,
      fontSize: 25,
    },
    [theme.breakpoints.only('sm')]: {
      width: 310,
      marginTop: 13,
      fontSize: 25,
    },
    [theme.breakpoints.only('md')]: {
      width: 320,
      marginTop: 13,
      fontSize: 28,
    },
    [theme.breakpoints.only('lg')]: {
      width: 255,
      marginTop: 13,
      fontSize: 22,
    },
    [theme.breakpoints.only('xl')]: {
      width: 255,
      marginTop: 15,
      fontSize: 23,
    },
  },
}));

const CardRecipe = (props) => {
  const { recipe, likes } = props;
  const classes = useStyle();

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Grid item xs={12} sm={6} lg={3} className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardActionArea onClick={handleOpenDialog}>
            <Grid
              className={classes.cardImage}
              src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
              component="img"
            />
            <CardHeader
              className={classes.cardContent}
              title={
                <Typography
                  variant="h2"
                  color="initial"
                  className={classes.cardTitle}
                >
                  {recipe.title}
                </Typography>
              }
            />
          </CardActionArea>
          <CardActions className={classes.cardContent}>
            <Button
              size="large"
              variant="text"
              disabled
              startIcon={<FavoriteBorder />}
            >
              {likes}
            </Button>
            <Button
              size="large"
              variant="text"
              disabled
              startIcon={<AccessTime />}
            >
              {recipe.readyInMinutes} min
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <DialogRecipe
        open={openDialog}
        handleClose={handleCloseDialog}
        recipe={recipe}
        likes={likes}
      />
    </>
  );
};

export default CardRecipe;
