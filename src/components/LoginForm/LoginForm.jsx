import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

//MUI stuff
import { Box, Container, Paper, Grid, TextField, Button, } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Box component="form" className="formPanel" onSubmit={login}>
      <Grid container
        style={{Paper}}
        alignItems="flex-end"
      >
        <Grid item xs={12}
          sx={{marginTop: 0, marginBottom: 0}}
        >
          <h2>Login</h2>
          {errors.loginMessage && (
            <h3 className="alert" role="alert">
            {errors.loginMessage}
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
              required
              value={username}
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
              variant="outlined"
              color="secondary"
              type="password"
              name="password"
              required
              value={password}
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
            value="Log In"
            variant="contained"
            color="success"
          > Log In </Button>
          {/* <input className="btn" type="submit" name="submit" value="Log In" /> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginForm;
