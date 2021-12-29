import react, {useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

//MUI stuff
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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
  //Local State?
  const [inventory, setInventory] = useState([]);
  


  const handleShowPacks = () => {
    setInventory(packs)
  }
  const handleShowGear = () => {
    setInventory(gear)
  }
  const handleShowConsumables = () => {
    setInventory(consumables)
  }
  const handleAddToCurrentPack = (item) => {
    if (item.category_id < 10) {
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
            onClick={handleShowPacks}
          >
            Show Packs
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
              <StyledTableCell>Add to Pack</StyledTableCell>
              <StyledTableCell>Conditionally render STUFF</StyledTableCell>
              <StyledTableCell>Weight (ounces) </StyledTableCell>
              <StyledTableCell>Category ID</StyledTableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {inventory.map((item) => {
              return <StyledTableRow key={item.id}>
                <StyledTableCell>
                  <Button 
                    onClick={(e) => handleAddToCurrentPack(item)}
                  >
                    Add to Pack
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  {item.name}
                </StyledTableCell>
                <StyledTableCell>
                  {item.weight}
                </StyledTableCell>
                <StyledTableCell>
                  {item.category_id}
                </StyledTableCell>
              </StyledTableRow>
            })}
          </TableBody>

        </Table>
      </TableContainer>
    </Box>

  )
};