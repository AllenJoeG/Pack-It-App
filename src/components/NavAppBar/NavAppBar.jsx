import * as React from 'react';

import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';

// MUI Stuff
import { Stack, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import BackpackIcon from '@mui/icons-material/Backpack';
import HikingIcon from '@mui/icons-material/Hiking';
import HistoryIcon from '@mui/icons-material/History';
import CategoryIcon from '@mui/icons-material/Category';

///////////

export default function NavAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

{/* Medium and up logo display */}
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            PackItApp
          </Typography>

{/* Breakpoint rule that collapses Links into hamburger Menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key={0} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/pack" underline="hover">
                    <BackpackIcon color="inherit"/>
                    Pack
                  </Link>
                </Typography>
                
              </MenuItem>

              <MenuItem key={1} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/inventory" underline="hover">
                    <CategoryIcon color="inherit"/>
                    Items
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem key={2} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/unpack" underline="hover">
                    <HistoryIcon color="inherit"/>
                    Unpack
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem key={3} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/headout" underline="hover">
                    <HikingIcon color="inherit"/>
                    Head Out!
                  </Link>
                </Typography>
              </MenuItem>

            </Menu>
          </Box>

{/* XS Phone size logo display */}
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            PackItApp
          </Typography>

{/* Med and up Nav Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            justifyContent="space-around"
          >
              <Button
                to="/pack"
                component={ Link }
                variant="contained"
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'inline' }}
                
              >
                <BackpackIcon fontSize="small" color="inherit"/>
                Pack
              </Button>
            
              <Button
                to="/inventory"
                component={ Link }
                variant="contained"
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }}
              >
                <CategoryIcon fontSize="small" color="inherit"/>
                Items
              </Button>

              <Button
                to="/unpack"
                component={ Link }
                variant="contained"
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }}
              >
                <HistoryIcon fontSize="small" color="inherit"/>
                Unpack
              </Button>

              <Button
                to="/unpack"
                component={ Link }
                disabled
                variant="contained"
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }}
              >
                <HikingIcon fontSize="small" color="inherit"/>
                Head Out!
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem key={0} onClick={handleCloseNavMenu}>
                  <Link to='/user' underline="hover">
                    <Typography textAlign="center"> Profile </Typography>
                  </Link>
                </MenuItem>

                <MenuItem key={1} onClick={handleCloseNavMenu}>
                  <Link to='/about' underline="hover">
                    <Typography textAlign="center"> About </Typography>
                  </Link>
                </MenuItem>

                <MenuItem key={2} onClick={handleCloseNavMenu}>
                  <Link to='/info' underline="hover">
                    <Typography textAlign="center"> Help </Typography>
                  </Link>
                </MenuItem>

                <MenuItem key={3} onClick={handleCloseNavMenu}>
                  <LogOutButton />
                </MenuItem>

            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
