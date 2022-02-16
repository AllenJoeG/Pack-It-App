import React from 'react';

//MUI stuff
import { Box, Paper, Grid, } from '@mui/material';

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
              <Grid container>
                <Grid item xs={1} sm={1} med={2}>
                </Grid>

                <Grid item xs={10} sm={10} med={8}
                  sx={{ paddingTop: 3}}
                >
              
              <h2>About PackItApp</h2>
              <p>A gear management tool for the hiking/backpacking/camping and anything-outdoor enthusiast.</p>
              
              <h3> Development Roadmap: </h3>
              <h4> Signature Feature: Head Out! </h4>
              <p> -- Contextual Pack-builder based on desired user activity, user engagement habits, and customizable factors.</p>
              <h4> APIs: </h4>
              <p> -- Wolfram Alpha: Calculate caloric needs, safe pack-weight ratios and user energy metrics </p>
              <p> -- UPC: Allow users to pull in any products and relevant info with greater convenience</p>
              <h4> charts.js </h4>
              <p> -- Infographic representation of pack weight, or gear usage metrics by activity</p>

              <h3>Tech</h3>
                
                <a href="https://material-ui.com/">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a>
                <a href="https://reactjs.org/">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
                <a href="https://redux.js.org/">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
                <a href="https://nodejs.org/en/">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a>
                <a href="https://www.postgresql.org/">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
              <p> Built on the PERN stack: PostgreSQL, Express, React, Node.js (Javascript, HTML, CSS) </p>
              <p> Supporting technology: Redux, Redux-Sagas, Axios, Passport </p>
              <p> Styling: Material UI </p> 

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

export default AboutPage;
