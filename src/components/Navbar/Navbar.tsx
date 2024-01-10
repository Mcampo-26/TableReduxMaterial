import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';
import GradeIcon from '@mui/icons-material/Grade';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Programming React Redux
          </Typography>
          <IconButton color="warning" aria-label="favorites" component="label" onClick={handleClick}>
            <GradeIcon />
          </IconButton>
          <h4>Favorites</h4>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
