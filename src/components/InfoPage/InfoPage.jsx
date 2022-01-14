import React from 'react';

//MUI stuff
import { Box, Container, Paper, Grid, } from '@mui/material';

function InfoPage() {
  return (
    <Box container display='flex' alignItems="center" justifyContent='center' >
      <Box sx={{flexGrow: 1, display: 'flex', backgroundColor: 'primary.main', height: '85vh'}}>
        <Grid container>
          <Grid item xs={1} sm={1} med={2}/>

          <Grid item xs={10} sm={10} med={8}>
            <Paper elevation={3}
              sx={{backgroundColor: "primary.light", height: '100%' }}  
            >
            
              <h2>How to use PackItApp</h2>

            </Paper>
          </Grid>

          <Grid item xs={1} sm={1} med={2}/>
        </Grid>      
      </Box>
    </Box>
  );
}

export default InfoPage;
