import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//MUI stuff
import { Box, Container, Paper, Grid, TextField, Button, } from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <Grid container
        style={{Paper}}
        alignItems="flex-end"
      >
        <Grid item xs={12}
          sx={{marginTop: 0, marginBottom: 0}}
        >
          <h2>Register User</h2>
            {errors.registrationMessage && (
              <h3 className="alert" role="alert">
                {errors.registrationMessage}
              </h3>
            )}
        </Grid>

        <Grid item xs={12}
          sx={{marginTop: 2, marginBottom: 2}}
        >
          <label htmlFor="username">
            Username:
            <TextField
              fullWidth
              color="secondary"
              variant="outlined"
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </Grid>
      
        <Grid item xs={12}
          sx={{marginTop: 2, marginBottom: 2}}
        >
          <label htmlFor="password">
            Password:
            <TextField
              fullWidth
              color="secondary"
              variant="outlined"
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </Grid>

        <Grid item xs={12}
          sx={{marginTop: 2, marginBottom: 2}}
        >
          <Button 
            type="submit" 
            name="submit" 
            value="Register"
            color="success"
            variant="contained"
          > Register 
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default RegisterForm;
