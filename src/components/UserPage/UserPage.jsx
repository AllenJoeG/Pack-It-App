import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//MUI stuff
import { Box, Paper, Grid, Avatar, Button } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import CategoryIcon from '@mui/icons-material/Category';

function UserPage() {
    //Alias Reducers
    const user = useSelector((store) => store.user);
    const userGear = useSelector((store) => store.userCustomReducer);
    const userTrips = useSelector((store) => store.headoutTripReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'GET_USER_TRIPS'})
    dispatch({type: 'GET_USER_CUSTOM'})
  }, []);

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
              <Grid container>
                <Grid item xs={1} sm={1} med={2}>
                </Grid>

                <Grid item xs={10} sm={10} med={8}
                  sx={{ paddingTop: 7}}
                >
                  <Avatar
                    alt={user.username}
                    // src="src/components/UserPage/IMG_1369.jpeg"
                    sx={{ width: 175, height: 175 }}
                  />
                    <h2>Welcome back, {user.username}!</h2>
                    <h4>You currently have {userTrips.length} packs saved! </h4>
                      <Button
                        to="/unpack"
                        component={ Link }
                        variant="contained"
                        sx={{ my: 1, color: 'white', display: 'block' }}
                      >
                        <HistoryIcon fontSize="small" color="inherit"/>
                        Unpack
                      </Button>
                    
                    <h4> Currently tracking {userGear.length} custom item entries!</h4>
                    <Button
                      to="/inventory"
                      component={ Link }
                      variant="contained"
                      sx={{ my: 1, color: 'white', display: 'block' }}
                    >
                      <CategoryIcon fontSize="small" color="inherit"/>
                      Items
                    </Button>
                </Grid>

                <Grid item xs={1} sm={1} med={2}>
                </Grid>
              </Grid>
              
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
