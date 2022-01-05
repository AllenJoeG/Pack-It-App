import react, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//MUI
import {TextField, Box, Button, Modal, MenuItem} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoadPackModal() {
  // useEffect(() => {
  //   dispatch({type: 'SET_CP_INDEX'})
  // }, [])
  //Modal Stuff
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //REDUX Store
  const userPacks = useSelector((store) => store.headoutTripReducer);
  const cPackIndex = useSelector((store) => store.currentPackIndex);
  const userGear = useSelector((store) => store.userCustomReducer);

  //Local State for user Select
  const [packLoad, setPackLoad] = useState('');
  
  const dispatch = useDispatch();

  const handleLoadPack = (tripID) => {
    
    

    const tripFilteredGear = userGear.filter(item => (item.trip_id == tripID))

    //better to dispatch once with full object?
    //or loop through and dispatch once per item to ADD_CURRENTPACK
      //this would allow it to load on top of stuff. Might be preferable.
    
    for (let item of tripFilteredGear) {
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: {
          id: 1000,
          category_id: Number(item.category_id),
          details: item.gear_note,
          name: item.name,
          weight: item.weight,
          gear_id: item.gear_id,
          consumable_id: item.consumable_id,
          pack_note: item.pack_note          
        }
      })
      dispatch({type: 'INCR_CP_INDEX'});
      
    }
  }


  return (
    <div>
      <Button 
          variant="contained"
          onClick={handleOpen}
        >Load Pack
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            select
            fullWidth
            variant="outlined"
            formlabel="Load a Pack"
            value={packLoad}
            onChange={(e) => setPackLoad(e.target.value)}
          >
            {userPacks.map((pack) => {
              return <MenuItem 
                      key={pack.id} 
                      value={pack.id}
                    >
                      {pack.trip_name} - {(pack.trip_date).slice(0,10)}
                    </MenuItem>
            })}
          </TextField>

          <Button 
            variant="contained" 
            size="small" 
            color="success" 
            onClick={() => handleLoadPack(packLoad)}
          >Load Pack!</Button>
          
        </Box>
      </Modal>
    </div>
  )
};