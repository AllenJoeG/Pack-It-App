import react, {useEffect} from 'react';
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
  const inventory = useSelector((store) => store.inventoryReducer);
  const categories = useSelector((store) => store.categoriesReducer);

  useEffect(() => {
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
          <Button variant="contained">Show Gear</Button>
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
              <StyledTableCell>Conditionally render STUFF</StyledTableCell>
              <StyledTableCell>Weight (ounces) </StyledTableCell>
              <StyledTableCell>Category ID</StyledTableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {inventory.map((item) => {
              return <StyledTableRow key={item.id}>
                <StyledTableCell>
                  {item.gear}
                </StyledTableCell>
                <StyledTableCell>
                  {item.weight}
                </StyledTableCell>
                <StyledTableCell>
                  {item.gear_category_id}
                </StyledTableCell>
              </StyledTableRow>
            })}
          </TableBody>

        </Table>
      </TableContainer>
    </Box>

  )
};