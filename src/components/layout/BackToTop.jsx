import React from 'react';
import {
  Fab,
  makeStyles,
  Zoom,
  useScrollTrigger,
  Hidden,
} from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    [theme.breakpoints.only('xs')]: {
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
  },
}));

const ScrollToTop = (props) => {
  const { children, window } = props;
  const classes = useStyle();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#top'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

const BackToTop = (props) => {
  return (
    <ScrollToTop {...props}>
      <Hidden only="xs">
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <ArrowUpward />
        </Fab>
      </Hidden>
      <Hidden smUp>
        <Fab color="primary" size="medium" aria-label="scroll back to top">
          <ArrowUpward />
        </Fab>
      </Hidden>
    </ScrollToTop>
  );
};

export default BackToTop;
