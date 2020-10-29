import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroMain from '../components/main/HeroMain';
import MainList from '../components/main/MainList';
import useGetSharedRecipe from '../hooks/useGetSharedRecipe';
import DialogRecipe from '../utils/Recipe/DialogRecipe';

const LandingPage = () => {
  const { id } = useParams();
  const [openDialog, setOpenDialog] = useState(false);

  const [sharedRecipe, likes] = useGetSharedRecipe(id, setOpenDialog);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <HeroMain />
      <MainList />
      {sharedRecipe !== null ? (
        <DialogRecipe
          open={openDialog}
          handleClose={handleCloseDialog}
          recipe={sharedRecipe}
          likes={likes}
        />
      ) : null}
    </>
  );
};

export default LandingPage;
