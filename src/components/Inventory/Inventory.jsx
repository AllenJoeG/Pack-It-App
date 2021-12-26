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
  //Reducers
  const packs = useSelector((store) => store.packReducer);
  const gear = useSelector((store) => store.gearReducer);
  const consumables = useSelector((store) => store.consumablesReducer);
  const categories = useSelector((store) => store.categoriesReducer);
  //Local State?
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    dispatch({type: 'GET_PACKS'})
    dispatch({type: 'GET_CONSUMABLES'})
    dispatch({type: 'GET_GEAR'})
    dispatch({type: 'GET_CATEGORIES'})
  }, [])



  return(
    <Box>
      <Grid container>
        <Grid item xs={6} sm={3}>
          <Button variant="contained">Show Packs</Button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button 
            variant="contained"
            onClick={handleShowGear}
          >
            Show Gear</Button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button variant="contained">Show Consumables</Button>
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
                  <Button>Add to Pack</Button>
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