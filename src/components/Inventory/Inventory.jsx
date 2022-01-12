import react, {useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import AddCustomGearModal from '../AddCustomGearModal/AddCustomGearModal';

//MUI stuff
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Table, TableBody, TableCell, tableCellClasses, TableContainer, 
  TableHead, TableRow, TableFooter, TextField, Paper, Button} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [`&.${tableCellClasses.footer}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.black,
  }
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

const cellStyling = {
  width: '19%',
};

export default function Inventory() {
  //alias HOOKS
  const dispatch = useDispatch();
  const history = useHistory();
  //alias Reducers
  const packs = useSelector((store) => store.packsReducer);
  const gear = useSelector((store) => store.gearReducer);
  const consumables = useSelector((store) => store.consumablesReducer);
  const categories = useSelector((store) => store.categoriesReducer);
  const currentPack = useSelector((store) => store.currentPackReducer)
  const currentPackIndex = useSelector((store) => store.currentPackIndex);
  const usercustom = useSelector((store) => store.userCustomReducer)

  //Local State toggles between reducers to display on table.
  const [inventory, setInventory] = useState([]);
  


  const handleShowUsercustom = () => {
    setInventory(usercustom)
  }
  const handleShowGear = () => {
    setInventory(gear)
  }
  const handleShowConsumables = () => {
    setInventory(consumables)
  }
  const handleAddToCurrentPack = (item) => {
    
    
    if (!item.gear_id && !item.consumable_id) { //Catches 'Add Custom Gear' that has no trip ID
      let addItem = {...item, id: currentPackIndex}
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: addItem
      })
      dispatch({
        type: 'INCR_CP_INDEX'
      })
    } else if (item.trip_id) { //Catches 'Custom Gear' that has a trip ID
      let addItem = {...item, id: currentPackIndex}
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: addItem
      })
      dispatch({
        type: 'INCR_CP_INDEX'
      })
    } else if (item.category_id < 10) { //Catches Gear from static table
      let addItem = {...item, id: currentPackIndex, gear_id: item.id}
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: addItem
      })
      dispatch({
        type: 'INCR_CP_INDEX'
      })
    } else if (item.category_id < 13) { //Catches Consumables from static table
      let addItem = {...item, id: currentPackIndex, consumable_id: item.id}
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: addItem
      })
      dispatch({
        type: 'INCR_CP_INDEX'
      })
    }
  }

  return(
    <Box>
      <Grid container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={5} sm={2}>
          {/* <Button
            variant="contained"
            color="secondary"            
            onClick={handleShowUsercustom}
          >
            Custom Gear
          </Button> */}
        </Grid>
        <Grid item xs={5} sm={2}>
          {/* <Button 
            variant="contained"
            color="secondary"                     
            onClick={handleShowGear}
          >
            Default Gear
          </Button> */}
        </Grid>
        <Grid item xs={5} sm={2}>
          {/* <Button
            variant="contained"
            color="secondary"            
            onClick={handleShowConsumables}
          >
            Consumables
          </Button> */}
        </Grid>
        <Grid item xs={5} sm={2}>
          {/* <Button 
          variant="contained"
            color="secondary"            
          >Categories</Button> */}
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
      
      <TableContainer sx={{ maxHeight: 650}}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell align="right"
                sx = {{ ...cellStyling }}
              >
                Item Name
              </StyledTableCell>

              <StyledTableCell align="right"
                sx = {{ ...cellStyling }}
              >
                Item Notes
              </StyledTableCell> 

              <StyledTableCell align="right"
                sx = {{ ...cellStyling }}
              >
                <Button 
                  disabled
                  variant="contained"
                  color="secondary"   
                  size="small"
                >
                  Categories
                </Button>
              </StyledTableCell>

              <StyledTableCell align="right"
                sx = {{ ...cellStyling }}
              >
                Weight (oz)
              </StyledTableCell>

              <StyledTableCell align="right"
                sx = {{ ...cellStyling }}
              >
                Add to Pack
              </StyledTableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {inventory.map((item) => {
              return <StyledTableRow key={item.id}>
                
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                  {item.details ?
                    item.details :
                    item.gear_note}
                </StyledTableCell>
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                  {(categories.filter(cat => (cat.id == item.category_id)))[0].category}
                </StyledTableCell>
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                  {item.weight}
                </StyledTableCell>
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                  <Button
                    variant="contained"
                    size="small"
                    color="success"
                    onClick={(e) => handleAddToCurrentPack(item)}
                  >
                    Add to Pack
                  </Button>
                </StyledTableCell>
                
              </StyledTableRow>
            })}
          </TableBody>

          <TableFooter style={{left: 0, bottom: 0, zIndex: 2, position: 'sticky'}}>
            <StyledTableRow>

              <StyledTableCell sx = {{ ...cellStyling }} align="right">
                <AddCustomGearModal/>
              </StyledTableCell>

              <StyledTableCell sx = {{ ...cellStyling }} align="left"> 
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  >Add Custom Pack</Button>
              </StyledTableCell>

              <StyledTableCell sx = {{ ...cellStyling }} align="right">
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"            
                  onClick={handleShowUsercustom}
                >
                  Custom Gear
                </Button>
              </StyledTableCell>

              <StyledTableCell sx = {{ ...cellStyling }} align="center">
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"            
                  onClick={handleShowConsumables}
                >
                  Consumables
                </Button>
              </StyledTableCell>

              <StyledTableCell sx = {{ ...cellStyling }} align="left">
                <Button 
                  variant="contained"
                  size="small"
                  color="secondary"                     
                  onClick={handleShowGear}
                >
                  Default Gear
                </Button>
              </StyledTableCell>

            </StyledTableRow>
          </TableFooter>

        </Table>
      </TableContainer>
    </Box>

  )
};