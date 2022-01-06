import react, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import LoadPackModal from '../LoadPackModal/LoadPackModal';
//MUI stuff
import { styled } from '@mui/material/styles';
import {Box, Container, Grid, Table, TableBody, TableFooter, TableCell, 
  tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button,
  TextField, MenuItem, Typography} from '@mui/material';

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
  const [chosenPack, setChosenPack] = useState('Choose Pack');
  const [browseCategory, setBrowseCategory] = useState('');
  const [addToPackDropdown, setAddToPackDropdown] = useState([]);
  const [browseToAdd, setBrowseToAdd] = useState('');
  

  //UnUSEd effect, lol
  useEffect(() => {

  }, [])

  const handlePackChange = (e) => {
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

  const handleSavePack = () => {
    dispatch({
      type: 'POST_CURRENT_PACK',
      payload: {
        currentPack,
        chosenPack
      }
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
      let addItem = {...addItemArray[0], id: currentPackIndex, gear_id: addItemArray[0].id}
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: addItem
      })
      dispatch({
        type: 'INCR_CP_INDEX'
      })
    } else if (browseCategory < 13){
      let addItemArray = consumables.filter(item => (item.id == browseToAdd))
      let addItem = {...addItemArray[0], id: currentPackIndex, consumable_id: addItemArray[0].id}
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
    } else if (categoryID < 13) {
      setAddToPackDropdown(consumables.filter(item => (item.category_id == categoryID)))
    }
  }

  // const handleLoadPack = () => {

  // }

  return(
    <Box>
      <Grid 
        container 
        direction="row" 
        justifyContent="space-evenly" 
        alignItems="center"
      >
        <Grid item xs={6} sm={3}>
          <Button 
            variant="contained"
            onClick={handleSavePack}
          >Save Pack</Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <LoadPackModal />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="contained">Load Category</Button>
        </Grid>
        <Grid item xs={6} sm={3}>
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
                  label="Select a Pack"
                  formlabel="Select a Pack"
                  size="small"
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
              <StyledTableCell> Item Category </StyledTableCell>
              <StyledTableCell>Weight: {calculatePackWeight()}</StyledTableCell>
              <StyledTableCell> Remove Item </StyledTableCell>
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
                {(categories.filter(cat => (cat.id == item.category_id)))[0].category}
                </StyledTableCell>
                <StyledTableCell>
                  {item.description}
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
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
                <Typography align="right">Browse to Add</Typography>
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
              <StyledTableCell>
              {browseToAdd ? 
                  <Button 
                    variant="contained"
                    color="success"
                    size="small"
                    align="left"
                    onClick={handleAddToCurrentPack}>
                    Add to Pack
                  </Button>
                  : 
                  <p>Select Item</p>
                }
              </StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </TableFooter>

        </Table>
      </TableContainer>


    </Box>
    
  )
};