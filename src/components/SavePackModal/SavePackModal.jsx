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

  const handleSavePack = () => {
    dispatch({
      type: 'POST_CURRENT_PACK',
      payload: {
        currentPack,
        chosenPack
      }
    })
  }


  return (
    <div>
      <Button 
          variant="contained"
          color="secondary"
          size="small"
          onClick={handleOpen}
        >Save Pack
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

          <Button 
            variant="contained" 
            size="small" 
            color="success" 
            onClick={() => handleSavePack()}
          >Save Pack!</Button>
          
        </Box>
      </Modal>
    </div>
  )
};

  // <TextField
  //   select
  //   fullWidth
  //   variant="outlined"
  //   label="Select a Pack"
  //   formlabel="Select a Pack"
  //   size="small"
  //   value={chosenPack}
  //   onChange={handlePackChange}
  // >
  //   {packs.map((pack) => {
  //     return <MenuItem 
  //             key={pack.id} 
  //             value={pack}
  //           >
  //             {pack.pack_name}
  //           </MenuItem>
  //   })}
  // </TextField>