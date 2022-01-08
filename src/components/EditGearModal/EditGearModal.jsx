import react, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//MUI
import {TextField, Box, Button, Modal, Grid, Paper} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #42a5f5',
  boxShadow: 24,
  p: 4,
};

export default function EditGearModal({thingID, thingWeight, thinGN, thinPN}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [weight, setWeight] = useState(thingWeight);
  const [gearNote, setGearNote] = useState(thinGN);
  const [packNote, setPackNote] = useState(thinPN);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch({
      type: 'UPDATE_CUSTOM_GEAR',
      payload: {
        id: thingID,
        weight: weight,
        gear_note: gearNote,
        pack_note: packNote
      }
    })
  }


  return (
    <div>
      <Button variant="contained" color="success" size="small" onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container
            style={{Paper}}
            alignItems="flex-end"
            
            >
          
            <Grid item xs={12}
              sx={{marginTop: 2, marginBottom: 2}}
            >
              <TextField
                  fullWidth
                  label = "Gear Notes"
                  variant="outlined"
                  value={gearNote}
                  onChange={e => setGearNote(e.target.value)}
                />
            </Grid>

            <Grid item xs={12}
              sx={{marginTop:2, marginBottom: 2}}
            >
              <TextField
                  fullWidth
                  label = "Pack Notes"
                  variant="outlined"
                  value={packNote}
                  onChange={e => setPackNote(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}
              sx={{marginTop: 2, marginBottom: 2}}
            >
              <TextField 
                label="Weight change?"
                variant="outlined"
                value={weight}
                onChange={e => setWeight(e.target.value)}
              />
            </Grid>

            <Grid item xs={2}></Grid>

            <Grid item xs={4}
              sx={{marginTop: 2, marginBottom: 2}}
            >
              <Button 
                
                variant="contained" 
                size="small" 
                color="success" 
                onClick={handleUpdate}
              >
                Update Pack!
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
};