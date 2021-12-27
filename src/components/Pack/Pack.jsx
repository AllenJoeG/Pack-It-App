import react, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
//MUI stuff
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Table, TableBody, TableFooter, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material';

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
  }
}));

export default function Pack() {
  //alias HOOKS
  const dispatch = useDispatch();
  //REDUCERS
  const currentPack = useSelector((store) => store.currentPackReducer);

  //UnUSEd effect, lol
  useEffect(() => {

  }, [])

  const handleDeleteFromCurrentPack = (id) => {
    console.log(id);
    dispatch({
      type: 'DELETE_CURRENTPACKITEM',
      payload: id
    })
  }

  const handleClearCurrentPack = () => {
    dispatch({
      type: 'CLEAR_CURRENTPACK'
    })
  }

  return(
    <Box>
      <Grid container>
        <Grid item xs={6} sm={3}>
          <Button variant="contained">Save Pack</Button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button variant="contained">Load Pack</Button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button variant="contained">Load Category</Button>
        </Grid>
        <Grid item xs={3} sm={3}>
          <Button 
            variant="contained"
            onClick={handleClearCurrentPack}
          >Clear Pack</Button>
        </Grid>
      </Grid>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Pack Dropdown</StyledTableCell>
              <StyledTableCell> x </StyledTableCell>
              <StyledTableCell> x </StyledTableCell>
              <StyledTableCell>Cumulative Weight</StyledTableCell>
              <StyledTableCell> x </StyledTableCell>
            </TableRow>
          </TableHead>
          {/* TableBody maps through currentPack reducer */}
          <TableBody>
            {currentPack.map((item) => {
              return <StyledTableRow key={item.id}>
                <StyledTableCell>
                  <Button>Add to Pack</Button>
                </StyledTableCell>
                <StyledTableCell>
                  {item.name}
                </StyledTableCell>
                <StyledTableCell>
                  {item.weight} oz
                </StyledTableCell>
                <StyledTableCell>
                  {item.category_id}
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteFromCurrentPack(item.id)}
                  >X</Button>
                </StyledTableCell>

              </StyledTableRow>
            })}
          </TableBody>
          <TableFooter>
            <StyledTableRow>
              <StyledTableCell><Button>ADD</Button></StyledTableCell>
              <StyledTableCell>Map Categories Dropdown</StyledTableCell>
              <StyledTableCell>Selected Category Dropdown</StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </TableFooter>

        </Table>
      </TableContainer>


    </Box>
    
  )
};