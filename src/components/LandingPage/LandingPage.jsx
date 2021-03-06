import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

//MUI stuff
import { Box, Paper, Grid, } from '@mui/material';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Box container display='flex' alignItems="center" justifyContent='center' >
      <Box sx={{flexGrow: 1, display: 'flex', backgroundColor: 'primary.main', height: '85vh'}}>
        <Grid container>
          
            <Grid item xs={1} sm={1} med={2}>
            </Grid>

            <Grid item xs={6} sm={6} med={5}>
            <Paper elevation={3}
            sx={{backgroundColor: "primary.light", height: '100%'  }}  
          >
              <p>
                You have unlocked the majestic and hidden portal to Latinate information!
              </p>

              <p>
                Praesent consectetur orci dui, id elementum eros facilisis id. Sed
                id dolor in augue porttitor faucibus eget sit amet ante. Nunc
                consectetur placerat pharetra. Aenean gravida ex ut erat commodo, ut
                finibus metus facilisis. Nullam eget lectus non urna rhoncus
                accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
                euismod, augue at condimentum rhoncus, massa lorem semper lacus, sed
                lobortis augue mi vel felis. Duis ultrices sapien at est convallis
                congue.
              </p>

              </Paper>
            </Grid>

            <Grid item xs={4} sm={4} med={3}>
            <Paper elevation={3}
            sx={{backgroundColor: "primary.light" }}  
          >
              <RegisterForm />

              <center>
                <h4>Already a Member?</h4>
                <button className="btn btn_sizeSm" onClick={onLogin}>
                  Login
                </button>
              </center>
              </Paper>
            </Grid>

            <Grid item xs={1} sm={1} med={2}>
            </Grid>
        </Grid>
      
      </Box>
    </Box>
  );
}

export default LandingPage;
