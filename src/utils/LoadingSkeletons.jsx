import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: 270,
    maxWidth: 350,
    [theme.breakpoints.down('md')]: {
      height: 320,
    },

    [theme.breakpoints.only('xs')]: {
      height: 290,
    },
  },
  skeletonImg: {
    width: '100%',
    height: '70%',
  },
  skeletonTitle: {
    width: '75%',
    height: '15%',
  },
  skeletonInfo: {
    width: '45%',
    height: '15%',
  },
  skeletonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const CardSkeleton = () => {
  const classes = useStyle();
  return (
    <div className={classes.card}>
      <Skeleton
        className={classes.skeletonImg}
        variant="rect"
        animation="wave"
      />
      <Skeleton
        className={classes.skeletonTitle}
        variant="text"
        animation="wave"
      />
      <Skeleton
        className={classes.skeletonInfo}
        variant="text"
        animation="wave"
      />
    </div>
  );
};

const LoadingSkeletons = () => {
  const classes = useStyle();
  var skeletons = [];

  for (let i = 0; i < 12; i++) {
    skeletons.push(
      <Grid item xs={12} sm={6} lg={3} className={classes.skeletonContainer}>
        <CardSkeleton />
      </Grid>
    );
  }

  return (
    <>
      {skeletons.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </>
  );
};

export default LoadingSkeletons;
