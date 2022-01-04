import react, {useState} from 'react';
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
  //Modal Stuff
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //Local State for user Select
  const [packLoad, setPackLoad] = useState('');
  //REDUX Store
  const userPacks = useSelector((store) => store.headoutTripReducer)

  const dispatch = useDispatch();

  const handleLoadPack = () => {
    dispatch({
      type: 'LOAD_TO_CURRENT_PACK',
      payload: {
        id: packLoad
      }
    })
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
            onClick={handleLoadPack}
          >Load Pack!</Button>
          
        </Box>
      </Modal>
    </div>
  )
};