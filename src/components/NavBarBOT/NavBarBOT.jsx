import * as React from 'react';

// MUI Stuff
import {AppBar, Toolbar } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
// import BackpackIcon from '@mui/icons-material/Backpack';
// import HikingIcon from '@mui/icons-material/Hiking';
// import HistoryIcon from '@mui/icons-material/History';
// import CategoryIcon from '@mui/icons-material/Category';

///////////

export default function NavBarBOT() {

  return (
    <>
    <AppBar position="fixed" color="primary" sx={{top: 'auto', bottom: 0}}>
      <Toolbar>
        <footer align="center">&copy; Joe Allen 2022</footer>
      </Toolbar>
    </AppBar>

    </>
  )
}