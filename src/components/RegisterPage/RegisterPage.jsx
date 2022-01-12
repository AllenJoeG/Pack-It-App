import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

//MUI stuff
import { Box, Container, Paper, Grid, } from '@mui/material';

function RegisterPage() {
  const history = useHistory();

  return (
    <Box container display='flex' alignItems="center" justifyContent='center' >
      <Box sx={{flexGrow: 1, display: 'flex', backgroundColor: 'primary.main'}}>
        <Grid container>
          <Grid item xs={1} sm={1} med={2}>
          </Grid>

          <Grid item xs={10} sm={10} med={8}>

            <Paper elevation={3} variant="outlined"
              sx={{backgroundColor: "primary.light" }}  
            >
              
              <RegisterForm />

              <center>
                <button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/login');
                  }}
                >
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

export default RegisterPage;
