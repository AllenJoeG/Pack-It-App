import react, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import toast from 'react-hot-toast';

import LoadPackModal from '../LoadPackModal/LoadPackModal';
import SavePackModal from '../SavePackModal/SavePackModal';

////////// MUI stuff
import { styled } from '@mui/material/styles';
import {Box, Table, TableBody, TableFooter, TableCell, 
  tableCellClasses, TableContainer, TableHead, TableRow, Paper, Button,
  TextField, MenuItem, Snackbar} from '@mui/material';
  import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    // color: theme.palette.common.white,
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
    backgroundColor: '#E8F5E9'
  }
}));

const cellStyling = {
  width: '19%',
};
///////// end MUI Stuff

// 
// 
export default function Pack() {
  //alias HOOKS
  const dispatch = useDispatch();
  //REDUCERS
  const currentPack = useSelector((store) => store.currentPackReducer);
  const currentPackIndex = useSelector((store) => store.currentPackIndex);
  const gear = useSelector((store) => store.gearReducer);
  const consumables = useSelector((store) => store.consumablesReducer);
  const categories = useSelector((store) => store.categoriesReducer);
  //Local State
  const [chosenPack, setChosenPack] = useState('Choose Pack');
  const [browseCategory, setBrowseCategory] = useState('');
  const [addToPackDropdown, setAddToPackDropdown] = useState([]);
  const [browseToAdd, setBrowseToAdd] = useState('');
  
  useEffect(() => {
    dispatch({type: 'GET_USER_TRIPS'})
    dispatch({type: 'GET_USER_CUSTOM'})
  }, []);

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
    //Clear Inputs
    setBrowseCategory('');
    setBrowseToAdd('');
    
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

  return(
    <Box>

      <TableContainer sx= {{ maxHeight: 650 }}>
        <Table stickyHeader>
          <TableHead>

            <TableRow>
              <StyledTableCell sx = {{ ...cellStyling }} align="right">
                Item Name
              </StyledTableCell>
              <StyledTableCell sx = {{ ...cellStyling }} align="right"> 
                Item Notes
              </StyledTableCell>
              <StyledTableCell sx = {{ ...cellStyling }} align="right">
                <Button 
                  disabled
                  variant="contained"
                  color="secondary"
                  size="small"
                >
                  Categories
                </Button>
              </StyledTableCell>
              <StyledTableCell sx = {{ ...cellStyling }} align="right">
                {calculatePackWeight()}
              </StyledTableCell>
              <StyledTableCell sx = {{ ...cellStyling }} align="right">
                <Button 
                  align="right"
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={handleClearCurrentPack}
                >Clear Pack</Button>
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentPack.map((item) => {
              return <StyledTableRow key={item.id}>
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                  {item.description}
                </StyledTableCell>
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                {(categories.filter(cat => (cat.id == item.category_id)))[0].category}
                </StyledTableCell>
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                  {item.weight} oz
                </StyledTableCell>
                <StyledTableCell sx = {{ ...cellStyling }} align="right">
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDeleteFromCurrentPack(item.id)}
                  ><RemoveCircleOutlineIcon/></Button>
                </StyledTableCell>

              </StyledTableRow>
            })}
          </TableBody>
          {/* TABLE FOOTER CONTAINS LINE ITEM ADD FUNCTIONALITY */}
          <TableFooter style={{left: 0, bottom: 0, zIndex: 2, position: 'sticky'}}>
            <StyledTableRow>

              <StyledTableCell sx = {{ ...cellStyling }} align="right">
                <SavePackModal />
              </StyledTableCell>

              <StyledTableCell sx = {{ ...cellStyling }} align="left"> 
                <LoadPackModal />
              </StyledTableCell>

              <StyledTableCell>
                <TextField
                  select
                  fullWidth
                  color="info"
                  variant="outlined"
                  formlabel="Select a Category"
                  label="Select a Category"
                  size="small"
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
                  color="info"
                  variant="outlined"
                  formlabel="Select an item"
                  label="Select Item"
                  size="small"
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
            </StyledTableRow>
          </TableFooter>

        </Table>
      </TableContainer>


    </Box>
    
  )
};