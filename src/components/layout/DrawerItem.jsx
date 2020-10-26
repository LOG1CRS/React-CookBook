import React from 'react';
import {
  makeStyles,
  Drawer,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Search, GitHub, AllInbox } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { home, categories, repo, search } from '../../routes/routes.json';

import drawerImg from '../../assets/static/cookbook-icon.png';

const styles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.only('md')]: {
      width: 320,
    },
    [theme.breakpoints.only('sm')]: {
      width: 260,
    },
    [theme.breakpoints.only('xs')]: {
      width: 240,
    },
    flexShrink: 0,
  },
  drawerPaper: {
    [theme.breakpoints.only('md')]: {
      width: 320,
    },
    [theme.breakpoints.only('sm')]: {
      width: 260,
    },
    [theme.breakpoints.only('xs')]: {
      width: 240,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerImg: {
    [theme.breakpoints.only('md')]: {
      width: 85,
    },
    [theme.breakpoints.down('sm')]: {
      width: 70,
    },
  },
  drawerImgContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 30,
  },
  itemSpace: {
    marginBottom: 10,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  list: {
    width: '100%',
  },
  drawerTitle: {
    textAlign: 'center',
    [theme.breakpoints.only('md')]: {
      marginTop: 20,
      fontSize: 25,
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 18,
      fontSize: 22,
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: 15,
      fontSize: 20,
    },
  },
}));

const DrawerItem = (props) => {
  const classes = styles();

  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      classes={{ paper: classes.drawerPaper }}
      anchor="right"
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.drawerImgContainer}
      >
        <Link to={home} onClick={props.onClose ? props.onClose : null}>
          <img src={drawerImg} alt="Logo" className={classes.drawerImg} />
        </Link>
        <Link
          to={home}
          className={classes.link}
          onClick={props.onClose ? props.onClose : null}
        >
          <Typography
            variant="h1"
            color="primary"
            className={classes.drawerTitle}
          >
            React CookBook
          </Typography>
        </Link>
      </Grid>
      <Divider className={classes.itemSpace} />
      <Grid container>
        <List component="nav" className={classes.list}>
          <ListItem
            button
            className={classes.itemSpace}
            component={Link}
            to={search}
            onClick={props.onClose ? props.onClose : null}
          >
            <ListItemIcon>
              <Search />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem
            button
            className={classes.itemSpace}
            component={Link}
            to={categories}
            onClick={props.onClose ? props.onClose : null}
          >
            <ListItemIcon>
              <AllInbox />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            onClick={props.onClose ? props.onClose : null}
          >
            <ListItem button className={classes.itemSpace}>
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary="Repository" />
            </ListItem>
          </a>
        </List>
      </Grid>
    </Drawer>
  );
};

export default DrawerItem;
