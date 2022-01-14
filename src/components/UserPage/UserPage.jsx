import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

//MUI stuff
import { Box, Container, Paper, Grid, } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  return (
    <Box container display='flex' alignItems="center" justifyContent='center' >
      <Box sx={{flexGrow: 1, display: 'flex', backgroundColor: 'primary.main', height: '85vh'}}>
        <Grid container>
          <Grid item xs={1} sm={1} med={2}>
          </Grid>

          <Grid item xs={10} sm={10} med={8}>

            <Paper elevation={3} 
              sx={{backgroundColor: "primary.light", height: '100%'  }}  
            >
              
              <h2>Welcome, {user.username}!</h2>
              <p>Your ID is: {user.id}</p>

            </Paper>
          </Grid>

          <Grid item xs={1} sm={1} med={2}>
          </Grid>
        </Grid>
      
      </Box>
    </Box>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
