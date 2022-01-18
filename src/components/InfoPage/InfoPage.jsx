import React from 'react';

//MUI stuff
import { Box, Container, Paper, Grid, } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import BackpackIcon from '@mui/icons-material/Backpack';
import HikingIcon from '@mui/icons-material/Hiking';
import HistoryIcon from '@mui/icons-material/History';

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

              <h3> <CategoryIcon /> Items </h3>
                <p>Browse through a collection of provided default backpacking gear and consumable supplies, 
                  or through your own Custom Gear.</p>
                <p>Select from these lists to load them into your Current Pack</p>
                <p> And/Or add new custom gear, or new custom packs to your user collection in the database</p>

              <h3> <BackpackIcon/> Pack </h3>
                <p> Review Items you've added to your current pack. Add/Remove line items as needed.</p>
                <p> Feel free to click back and forth between the Items view and Pack view as you build out.</p>
                <p> When you're done, Save the pack. Alternatively, you can start the process by loading a previous pack you've built.</p>

              <h3> <HistoryIcon/> Unpack </h3>
                <p> Review previous packs built. Edit or Delete them!</p>
                <p> Add custom notes to your items, or the pack/trip, that reflect how YOU use them.</p>
                <p> Update the weight of items to reflect pieces changed, customization, damage, or depletion.</p>

              <h3> <HikingIcon/> Head Out!</h3>
                <p> Feature under construction. For now, just go take your bags out doors and do your thing!</p>
                <p> Stay tuned for user-contextual automated pack building that helps relieve the mental strain of preparation.</p>


            </Paper>
          </Grid>

          <Grid item xs={1} sm={1} med={2}/>
        </Grid>      
      </Box>
    </Box>
  );
}

export default InfoPage;
