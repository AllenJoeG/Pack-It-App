import react, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//MUI
import {TextField, Box, Button, Modal, MenuItem, Grid, Paper, Typography} from '@mui/material';

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
////// 

export default function SavePackModal() {

  //Modal Stuff
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //REDUX Store
  const packs = useSelector((store) => store.packsReducer);
  const currentPack = useSelector((store) => store.currentPackReducer);

  //Local State for user Select
  const [packName, setPackName] = useState('');
  const [chosenPack, setChosenPack] = useState('');
  const [saved, setSaved] = useState(false);
  
  const dispatch = useDispatch();

  const handleSavePack = () => {
    dispatch({
      type: 'POST_CURRENT_PACK',
      payload: {
        currentPack,
        chosenPack,
        packName
      }
    })
    setSaved(true);
    setChosenPack('');
    setPackName('');
    
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
          <Grid container style={{ Paper }}>

            <Grid item xs={12}
              sx={{marginTop: 2, marginBottom: 2}} 
            >
              <TextField
                select
                fullWidth
                variant="outlined"
                label="Select a Pack"
                formlabel="Select a Pack"
                value={chosenPack}
                onChange={(e) => setChosenPack(e.target.value)}
              >
                {packs.map((pack) => {
                  return <MenuItem 
                          key={pack.id} 
                          value={pack}
                        >
                          {pack.pack_name} - {pack.capacity}L
                        </MenuItem>
                })}
              </TextField>
            </Grid>

            <Grid item xs={12}
              sx={{marginTop: 2, marginBottom: 2}} 
            >
              <TextField
                fullWidth
                variant="outlined"
                label="Save As (name this pack)"
                formlabel="Save As (name this pack)"
                value={packName}
                onChange={(e) => setPackName(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}
              sx={{marginTop: 2, marginBottom: 2}} 
            >
              <Button 
                variant="contained" 
                size="small"
                color="success" 
                onClick={() => handleSavePack()}
              >Save Pack!</Button>
            </Grid>

            <Grid item xs={6}>
              
              {saved ?
                <Typography>
                  Pack saved! 
                </Typography>
              :
                <Typography>Save your work?</Typography>
              }
              
            </Grid>
          </Grid>
          
        </Box>
      </Modal>
    </div>
  )
};

