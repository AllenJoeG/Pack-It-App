import react, {useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

//MUI stuff
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';

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
  //Local State?
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
    //checks if item is from 'my stuff' 
    
    if (item.trip_id) {
      let addItem = {...item, id: currentPackIndex}
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: addItem
      })
      dispatch({
        type: 'INCR_CP_INDEX'
      })
    } else if (item.category_id < 10) {
      let addItem = {...item, id: currentPackIndex, gear_id: item.id}
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: addItem
      })
      dispatch({
        type: 'INCR_CP_INDEX'
      })
    } else if (item.category_id < 13) {
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
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            onClick={handleShowUsercustom}
          >
            Show My Stuff
          </Button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button 
            variant="contained"
            onClick={handleShowGear}
          >
            Show Gear</Button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button
            variant="contained"
            onClick={handleShowConsumables}
          >
            Show Consumables
          </Button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button variant="contained">Categories</Button>
        </Grid>
      </Grid>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell>Item Notes</StyledTableCell> 
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Weight (oz) </StyledTableCell>
              <StyledTableCell>Add to Pack</StyledTableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {inventory.map((item) => {
              return <StyledTableRow key={item.id}>
                
                <StyledTableCell>
                  {item.name}
                </StyledTableCell>
                <StyledTableCell>
                  {item.detail ?
                    item.detail :
                    item.gear_note}
                </StyledTableCell>
                <StyledTableCell>
                  {(categories.filter(cat => (cat.id == item.category_id)))[0].category}
                </StyledTableCell>
                <StyledTableCell>
                  {item.weight}
                </StyledTableCell>
                <StyledTableCell>
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

        </Table>
      </TableContainer>
    </Box>

  )
};