import React from 'react';
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
    [theme.breakpoints.only('xs')]: {
      marginTop: 10,
      fontSize: 27,
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 15,
      fontSize: 30,
    },
    [theme.breakpoints.only('md')]: {
      marginTop: 15,
      fontSize: 32,
    },
    [theme.breakpoints.only('lg')]: {
      marginTop: 15,
      fontSize: 26,
    },
    [theme.breakpoints.only('xl')]: {
      marginTop: 15,
      fontSize: 26,
    },
  },
}));

const CardRecipe = (props) => {
  const { title, likes, time, img } = props;
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={6} lg={3} className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.cardImage}
            src={img}
            component="img"
            alt="card-img"
          />
          <CardHeader
            className={classes.cardContent}
            title={
              <Typography
                variant="h2"
                color="initial"
                className={classes.cardTitle}
              >
                {title}
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
            {time} min
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardRecipe;
