import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

//MUI stuff
import { Box, Container, Paper, Grid, } from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <Box container display='flex' alignItems="center" justifyContent='center' >
      <Box sx={{flexGrow: 1, display: 'flex', backgroundColor: 'primary.main', height: '85vh'}}>
        <Grid container>
          <Grid item xs={1} sm={1} med={2}/>

          <Grid item xs={10} sm={10} med={8}>
            <Paper elevation={3} variant="outlined"
              sx={{backgroundColor: "primary.light", height: '100%'  }}  
            >
              
              <LoginForm />

              <center>
                <button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/registration');
                  }}
                >
                  Register
                </button>
              </center>

            </Paper>
          </Grid>

          <Grid item xs={1} sm={1} med={2}/>
        </Grid>      
      </Box>
    </Box>
  );
}

export default LoginPage;
