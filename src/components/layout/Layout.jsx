import React, { useState } from 'react';
import { makeStyles, Hidden } from '@material-ui/core';
import Navbar from './Navbar';
import DrawerItem from './DrawerItem';
import Footer from './Footer';
import BackToTop from './BackToTop';

const useStyle = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyle();

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar toggleOpen={toggleOpen} />
      <Hidden lgUp>
        <DrawerItem variant="temporary" open={open} onClose={toggleOpen} />
      </Hidden>
      <div className={classes.content}>
        <div id="top" />
        <div>{children}</div>
      </div>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
