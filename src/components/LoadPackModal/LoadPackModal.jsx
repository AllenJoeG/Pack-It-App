import react, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import toast from 'react-hot-toast';

//MUI
import {TextField, Box, Button, Modal, MenuItem, Grid, Paper} from '@mui/material';

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
    for (let i = 0; i < tripFilteredGear.length; i++) {
      dispatch({
        type: 'ADD_CURRENTPACK',
        payload: {
          id: (i + cPackIndex),
          category_id: Number(tripFilteredGear[i].category_id),
          details: tripFilteredGear[i].gear_note,
          name: tripFilteredGear[i].name,
          weight: tripFilteredGear[i].weight,
          gear_id: tripFilteredGear[i].gear_id,
          consumable_id: tripFilteredGear[i].consumable_id,
          pack_note: tripFilteredGear[i].pack_note          
        }
      })
      dispatch({type: 'INCR_CP_INDEX'});
    }
    toast.success(`Pack Loaded`);
    //clear input and close
    setPackLoad('');
    handleClose();
  }


  return (
    <div>
      <Button 
          variant="contained"
          color="secondary"
          size="small"
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
          <Grid container style={{ Paper }}>

            <Grid item xs={12}
              sx={{marginTop: 2, marginBottom: 2}} 
            >
              <TextField
                select
                fullWidth
                variant="outlined"
                formlabel="Load a Pack"
                label="Select a Pack to Load"
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
            </Grid>

            <Grid item xs={6}
              sx={{marginTop: 2, marginBottom: 2}} 
            >
              <Button 
                variant="contained" 
                size="small" 
                color="success" 
                onClick={() => handleLoadPack(packLoad)}
              >Load Pack!</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
};