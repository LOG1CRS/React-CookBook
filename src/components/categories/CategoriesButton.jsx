import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const CategoriesButton = (props) => {
  const { title } = props;
  return (
    <Link to="/categories-results">
      <ButtonBase>
        <Typography variant="h3" color="initial">
          {title}
        </Typography>
      </ButtonBase>
    </Link>
  );
};

export default CategoriesButton;
