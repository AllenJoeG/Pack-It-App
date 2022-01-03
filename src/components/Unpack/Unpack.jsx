import react, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
//MUI stuff
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Table, TableBody, TableFooter, TableCell, 
  tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button,
  TextField, MenuItem, IconButton, Collapse} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';


function GearRows({tripID}) {
  //Alias Reducers
  const userGear = useSelector((store) => store.userCustomReducer);
  const userTrips = useSelector((store) => store.headoutTripReducer);
  
  const filteredGear = userGear.filter(item => (item.trip_id == tripID))
  const filteredTrip = userTrips.filter(trip => (trip.id == tripID))

  const [open, setOpen] = useState(false);

  return(
    <React.Fragment>
      <TableRow key={filteredTrip.id} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{filteredTrip.trip_name}</TableCell>
        <TableCell>{filteredTrip.trip_date}</TableCell>
        <TableCell></TableCell>
        <TableCell>Weight?</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Thing</TableCell>
                    <TableCell align="right">Gear Notes</TableCell>
                    <TableCell align="right">Pack Notes</TableCell>
                    <TableCell align="right">Weight (oz)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredGear.map((gear) => {
                    return <TableRow key={gear.id}>
                      <TableCell align="right">{gear.category}</TableCell>
                      <TableCell align="right">{gear.name}</TableCell>
                      <TableCell align="right">{gear.gear_note}</TableCell>
                      <TableCell align="right">{gear.pack_note}</TableCell>
                      <TableCell align="right">{gear.weight}</TableCell>
                    </TableRow>
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default function Unpack() {
  const userTrips = useSelector((store) => store.headoutTripReducer);

  return(
    <Box>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Trip Name</TableCell>
              <TableCell align="right">Trip Date</TableCell>
              <TableCell align="right"> </TableCell>
              <TableCell align="right"> </TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userTrips.map((trip) => {
                return <GearRows key={trip.id} tripID={trip.id}/>
            })}
            
          </TableBody>
        </Table>
      </TableContainer>
    
    </Box>
  )
};