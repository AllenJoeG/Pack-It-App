import React from 'react';

//MUI stuff
import { Box, Container, Paper, Grid, } from '@mui/material';

function AboutPage() {
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
              
              <h2>About PackItApp</h2>
              <p>A gear management tool for the hiking/backpacking/camping and anything-outdoor enthusiast.</p>

            </Paper>
          </Grid>

          <Grid item xs={1} sm={1} med={2}>
          </Grid>
        </Grid>
      
      </Box>
    </Box>
  );
}

export default AboutPage;
