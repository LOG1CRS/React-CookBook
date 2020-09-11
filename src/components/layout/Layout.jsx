import React, { useState } from 'react';
import { makeStyles, Hidden, Container } from '@material-ui/core';
import Navbar from './Navbar';
import DrawerItem from './DrawerItem';
import Footer from './Footer';

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
        <div className={classes.toolbar} />
        <Container fixed>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
