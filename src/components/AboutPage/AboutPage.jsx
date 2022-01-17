import React from 'react';

//MUI stuff
import { Box, Container, Paper, Grid, } from '@mui/material';

function AboutPage() {
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
              
              <h2>About PackItApp</h2>
              <p>A gear management tool for the hiking/backpacking/camping and anything-outdoor enthusiast.</p>
              
              <h3> Development Roadmap - </h3>
              <h5> Signature Feature: Head Out! </h5>
              <p> Contextual Pack-builder based on desired user activity, user engagement habits, and customizable factors.</p>
              <h5> APIs: </h5>
              <p> Wolfram Alpha: Calculate caloric needs, safe pack-weight ratios and user energy metrics </p>
              <p> UPC: Allow users to pull in any products and relevant info with greater convenience</p>
              <h5> charts.js </h5>
              <p> Infographic representation of pack weight, or gear usage metrics by activity</p>

              <h3>Tech</h3>
              <p> Built on the PERN stack: PostgreSQL, Express, React, Node.js (Javascript, HTML, CSS) </p>
              <p> Supporting technology: Redux, Redux-Sagas, Axios, Passport </p>
              <p> Styling: Material UI </p> 

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
