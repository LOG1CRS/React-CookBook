import React, { useState } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Typography,
  useTheme,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  List,
  Collapse,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import useGetRecipeNutrition from '../../hooks/useGetRecipeNutrition';
import SwipeableViews from 'react-swipeable-views';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import RecipeErrorMessage from './RecipeErrorMessage';

const useStyle = makeStyles((theme) => ({
  tabContainer: {
    [theme.breakpoints.only('xs')]: {
      padding: 10,
    },
  },
  tableTitle: {
    fontSize: 22,
  },
  nutritionsButton: {
    boxShadow: theme.shadows[2],
  },
  preparation: {
    boxShadow: theme.shadows[2],
    width: '100%',
  },
  nutritionContainer: {
    padding: 0,
    paddingTop: 10,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  const classes = useStyle();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className={classes.tabContainer}>
          <Grid container>{children}</Grid>
        </Box>
      )}
    </div>
  );
};

const RecipeTabs = (props) => {
  const { recipe, tabValue, handleTabChange, handleChangeIndex } = props;
  const [loading, setLoading] = useState(true);
  const [openGood, setOpenGood] = useState(false);
  const [openBad, setOpenBad] = useState(false);
  const recipeNutrition = useGetRecipeNutrition(recipe.id, setLoading);

  const theme = useTheme();
  const classes = useStyle();

  const handleOpenGood = () => {
    setOpenGood(!openGood);
  };

  const handleOpenBad = () => {
    setOpenBad(!openBad);
  };

  return (
    <>
      <AppBar position="static" color="secondary">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label="Ingredients" />
          <Tab label="Preparation" />
          <Tab label="Nutrition" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis="x"
        index={tabValue}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={tabValue} index={0} dir={theme.direction}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography
                      variant="h1"
                      color="initial"
                      className={classes.tableTitle}
                    >
                      Ingredient
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="h1"
                      color="initial"
                      className={classes.tableTitle}
                    >
                      Amount
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recipe.extendedIngredients.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="center"> {item.name} </TableCell>
                    <TableCell align="center">
                      {item.amount} {item.unit}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={tabValue} index={1} dir={theme.direction}>
          <List component="nav" className={classes.preparation}>
            {recipe.analyzedInstructions[0] !== undefined ? (
              recipe.analyzedInstructions[0].steps.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`Step ${index + 1}`}
                    secondary={item.step}
                  />
                </ListItem>
              ))
            ) : (
              <RecipeErrorMessage />
            )}
          </List>
        </TabPanel>
        <TabPanel value={tabValue} index={2} dir={theme.direction}>
          {!loading ? (
            <>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <Typography
                          variant="h1"
                          color="initial"
                          className={classes.tableTitle}
                        >
                          Type
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="h1"
                          color="initial"
                          className={classes.tableTitle}
                        >
                          Amount
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">Calories</TableCell>
                      <TableCell align="center">
                        {recipeNutrition.calories}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Carbs</TableCell>
                      <TableCell align="center">
                        {recipeNutrition.carbs}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Fat</TableCell>
                      <TableCell align="center">
                        {recipeNutrition.fat}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Protein</TableCell>
                      <TableCell align="center">
                        {recipeNutrition.protein}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid container>
                <Grid item xs={12}>
                  <List component="nav">
                    <ListItem
                      button
                      onClick={handleOpenGood}
                      className={classes.nutritionsButton}
                    >
                      <ListItemText primary="Good Nutrition Information" />
                      {openGood ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openGood} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className={classes.nutritionContainer}>
                          <TableContainer component={Paper}>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">
                                    <Typography
                                      variant="h1"
                                      color="initial"
                                      className={classes.tableTitle}
                                    >
                                      Type
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography
                                      variant="h1"
                                      color="initial"
                                      className={classes.tableTitle}
                                    >
                                      Amount
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {recipeNutrition.good.map((item, index) => (
                                  <TableRow key={index}>
                                    <TableCell align="center">
                                      {item.title}
                                    </TableCell>
                                    <TableCell align="center">
                                      {item.amount}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </ListItem>
                      </List>
                    </Collapse>
                    <ListItem
                      button
                      onClick={handleOpenBad}
                      className={classes.nutritionsButton}
                    >
                      <ListItemText primary="Bad Nutrition Information" />
                      {openBad ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openBad} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItem className={classes.nutritionContainer}>
                          <TableContainer component={Paper}>
                            <Table>
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">
                                    <Typography
                                      variant="h1"
                                      color="initial"
                                      className={classes.tableTitle}
                                    >
                                      Type
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography
                                      variant="h1"
                                      color="initial"
                                      className={classes.tableTitle}
                                    >
                                      Amount
                                    </Typography>
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {recipeNutrition.bad.map((item, index) => (
                                  <TableRow key={index}>
                                    <TableCell align="center">
                                      {item.title}
                                    </TableCell>
                                    <TableCell align="center">
                                      {item.amount}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </ListItem>
                      </List>
                    </Collapse>
                  </List>
                </Grid>
              </Grid>
            </>
          ) : (
            <RecipeErrorMessage />
          )}
        </TabPanel>
      </SwipeableViews>
    </>
  );
};

export default RecipeTabs;
