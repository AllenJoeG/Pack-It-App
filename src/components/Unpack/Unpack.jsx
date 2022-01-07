import react, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import EditUnpackModal from '../EditUnpackModal/EditUnpackModal';
import EditGearModal from '../EditGearModal/EditGearModal';

///////MUI stuff
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Table, TableBody, TableFooter, TableCell, 
  tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button,
  TextField, MenuItem, IconButton, Collapse} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
////////

function GearRows({tripID}) {
  //Alias Reducers
  const userGear = useSelector((store) => store.userCustomReducer);
  const userTrips = useSelector((store) => store.headoutTripReducer);
  const categories = useSelector((store) => store.categoriesReducer);

  const filteredGear = userGear.filter(item => (item.trip_id == tripID))
  const filteredTrip = userTrips.filter(trip => (trip.id == tripID))
  
  const [open, setOpen] = useState(false);

  const calculatePackWeight = () => {
      let packWeight = 0;
      let weightArray = filteredGear.map((item) => {
        return Number(item.weight)
      })
      for (let weight of weightArray) {
        packWeight += weight;
      }
      return `${packWeight.toFixed(2)} oz, (${(packWeight / 16).toFixed(2)} lbs)`;
    }

  return(
    <React.Fragment>
      <StyledTableRow key={filteredTrip[0].id} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell align="right">{filteredTrip[0].trip_name}</StyledTableCell>
        <StyledTableCell align="right">{(filteredTrip[0].trip_date).slice(0,10)}</StyledTableCell>
        <StyledTableCell align="right">
          {filteredTrip[0].trip_notes}
        </StyledTableCell>
        <StyledTableCell align="right">{calculatePackWeight()}</StyledTableCell>
        <StyledTableCell align="right">
          <EditUnpackModal 
            tripID={filteredTrip[0].id}
            trip_Name={filteredTrip[0].trip_name}
            trip_Notes={filteredTrip[0].trip_notes}
          />
        </StyledTableCell>
        
      </StyledTableRow>

      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell align="right">Thing</StyledTableCell>
                    <StyledTableCell align="right">Gear Notes</StyledTableCell>
                    <StyledTableCell align="right">Pack Notes</StyledTableCell>
                    <StyledTableCell align="right">Category</StyledTableCell>
                    <StyledTableCell align="right">Weight (oz)</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {filteredGear.map((gear) => {
                    return <StyledTableRow key={gear.id}>
                      <StyledTableCell align="right">{gear.name}</StyledTableCell>
                      <StyledTableCell align="right">{gear.gear_note}</StyledTableCell>
                      <StyledTableCell align="right">{gear.pack_note}</StyledTableCell>
                      <StyledTableCell align="right">
                        {(categories.filter(cat => (cat.id == gear.category_id)))[0].category}
                      </StyledTableCell>
                      <StyledTableCell align="right">{gear.weight}</StyledTableCell>
                      <StyledTableCell align="right">
                        <EditGearModal thingID={gear.id} thingWeight={gear.weight} thinGN={gear.gear_note} thinPN={gear.pack_note} />
                      </StyledTableCell>
                    </StyledTableRow>
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  )
};

export default function Unpack() {
  const userTrips = useSelector((store) => store.headoutTripReducer);

  //Updates in case of nav after pack save
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'GET_USER_TRIPS'})
    dispatch({type: 'GET_USER_CUSTOM'})
    dispatch({type: 'GET_CATEGORIES'})
  }, []);

  return(
    <Box>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell />
              <StyledTableCell align="right"> Trip Name </StyledTableCell>
              <StyledTableCell align="right"> Trip Date </StyledTableCell>
              <StyledTableCell align="right"> Trip Notes </StyledTableCell>
              <StyledTableCell align="right"> Pack Weight </StyledTableCell>
              <StyledTableCell align="right"> </StyledTableCell>
            </StyledTableRow>
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