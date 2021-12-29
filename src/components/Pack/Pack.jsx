import react, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
//MUI stuff
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Table, TableBody, TableFooter, TableCell, 
  tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button,
  TextField, MenuItem} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    // color: theme.palette.common.white,
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
  const currentPackIndex = useSelector((store) => store.currentPackIndex);
  const packs = useSelector((store) => store.packsReducer);
  const gear = useSelector((store) => store.gearReducer);
  const consumables = useSelector((store) => store.consumablesReducer);
  const categories = useSelector((store) => store.categoriesReducer);
  //Local State
  const [chosenPack, setChosenPack] = useState({pack_name: 'Choose Pack', capacity: 0});
  const [browseCategory, setBrowseCategory] = useState('');
  const [addToPackDropdown, setAddToPackDropdown] = useState([]);
  const [browseToAdd, setBrowseToAdd] = useState('');
  

  //UnUSEd effect, lol
  useEffect(() => {

  }, [])

  const handlePackChange = (e) => {
    console.log(e.target.value);
    setChosenPack(e.target.value);
  }

  const calculatePackWeight = () => {
    if (!currentPack) {
      return 0;
    } else {
      let packWeight = 0;
      let weightArray = currentPack.map((item) => {
        return Number(item.weight)
      })
      for (let weight of weightArray) {
        packWeight += weight;
      }
      return `${packWeight.toFixed(2)} oz, (${(packWeight / 16).toFixed(2)} lbs)`;
    }
  }

  const handleDeleteFromCurrentPack = (id) => {
    dispatch({
      type: 'DELETE_CURRENTPACKITEM',
      payload: id
    })
  }

  const handleClearCurrentPack = () => {
    dispatch({
      type: 'CLEAR_CURRENTPACK'
    })
    dispatch({
      type: 'CLEAR_CP_INDEX'
    })
  }

  const handleBrowseToAddSelect = (e) => {
    setBrowseToAdd(e.target.value)
  }

  const handleAddToCurrentPack = () => {
    if (browseCategory < 10){
      let addItemArray = gear.filter(item => (item.id == browseToAdd))
      let addItem = {...addItemArray[0], id: currentPackIndex}
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: addItem
      })
      dispatch({
        type: 'INCR_CP_INDEX'
      })
    } else if (browseCategory < 13){
      let addItemArray = consumables.filter(item => (item.id == browseToAdd))
      let addItem = {...addItemArray[0], id: currentPackIndex}
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: addItem
      })
      dispatch({
        type: 'INCR_CP_INDEX'
      })
    }
    
  }

  const handleBrowseCategorySelect = (e) => {
    let categoryID = e.target.value;
    setBrowseCategory(categoryID);
    if (categoryID < 10){
      setAddToPackDropdown(gear.filter(item => (item.category_id == categoryID)))
      // dispatch({
      //   type: 'GET_GEAR_CATEGORY',
      //   payload: categoryID
      // })
    } else if (categoryID < 13) {
      setAddToPackDropdown(consumables.filter(item => (item.category_id == categoryID)))
      // dispatch({
      //   type: 'GET_CONSUMABLE_CATEGORY',
      //   payload: categoryID
      // })
    }
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
              <StyledTableCell>
                <TextField
                  select
                  fullWidth
                  variant="outlined"
                  formlabel="Select a Pack"
                  value={chosenPack}
                  onChange={handlePackChange}
                >
                  {packs.map((pack) => {
                    return <MenuItem 
                            key={pack.id} 
                            value={pack}
                          >
                            {pack.pack_name}
                          </MenuItem>
                  })}
                </TextField>
              </StyledTableCell>
              <StyledTableCell> {chosenPack.capacity} Liters </StyledTableCell>
              <StyledTableCell> x </StyledTableCell>
              <StyledTableCell>{calculatePackWeight()}</StyledTableCell>
              <StyledTableCell> x </StyledTableCell>
            </TableRow>
          </TableHead>
          {/* TableBody maps through currentPack reducer */}
          <TableBody>
            {currentPack.map((item) => {
              return <StyledTableRow key={item.id}>
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
                  {item.description}
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
          {/* TABLE FOOTER CONTAINS LINE ITEM ADD FUNCTIONALITY */}
          <TableFooter>
            <StyledTableRow>
              <StyledTableCell>
                <Button onClick={handleAddToCurrentPack}>
                  Add to Pack
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                <TextField
                  select
                  fullWidth
                  variant="outlined"
                  formlabel="Select a Category"
                  label="Select Category"
                  value={browseCategory}
                  onChange={handleBrowseCategorySelect}
                >
                  {categories.map((category) => {
                    return <MenuItem 
                            key={category.id} 
                            value={category.id}
                          >
                            {category.category}
                          </MenuItem>
                  })}
                </TextField>
              </StyledTableCell>
              <StyledTableCell>
              <TextField
                  select
                  fullWidth
                  variant="outlined"
                  formlabel="Select an item"
                  label="Select Item"
                  value={browseToAdd}
                  onChange={handleBrowseToAddSelect}
                >
                  {addToPackDropdown.map((item) => {
                    return <MenuItem 
                            key={item.id} 
                            value={item.id}
                          >
                            {item.name}
                          </MenuItem>
                  })}
                </TextField>
              </StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </TableFooter>

        </Table>
      </TableContainer>


    </Box>
    
  )
};