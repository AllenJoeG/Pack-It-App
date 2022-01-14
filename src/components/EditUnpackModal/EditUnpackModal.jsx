import react, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//MUI
import {TextField, Box, Button, Typography, Modal, Grid, Paper} from '@mui/material';

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

export default function EditUnpackModal({tripID, trip_Name, trip_Notes}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [tripName, setTripName] = useState(trip_Name);
  const [tripNotes, setTripNotes] = useState(trip_Notes);
  const [deleteValue, setDeleteValue] = useState(false)

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch({
      type: 'UPDATE_TRIP_DETAILS',
      payload: {
        id: tripID,
        trip_name: tripName,
        trip_notes: tripNotes
      }
    })
    handleClose();
  }

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TRIP_ID_AND_GEAR',
      payload: tripID
    })
    dispatch({
      type: 'GET_USER_TRIPS'
    })
    handleClose();
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
          <Grid container style={{ Paper }}>

            <Grid item xs={12} sm={12}
              sx={{marginTop: 2, marginBottom: 2}} 
            >
              <TextField 
                fullWidth
                label="Name Trip"
                variant="outlined"
                value={tripName}
                onChange={e => setTripName(e.target.value)}
              >
              </TextField>
            </Grid>

            <Grid item xs={12} sm={12}
              sx={{marginTop: 2, marginBottom: 2}} 
            >
              <TextField
                fullWidth
                label = "Trip Notes"
                variant="outlined"
                value={tripNotes}
                onChange={e => setTripNotes(e.target.value)}
              >
              </TextField>
            </Grid>

            <Grid item xs={12}
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
          
            <Grid item xs={6}
              sx={{marginTop: 2, marginBottom: 2}} 
            >
              <Button
                variant="contained" 
                size="small" 
                color="warning"
                onClick={(e) => setDeleteValue(!deleteValue)} 
              >
                Delete Pack?
              </Button>
            </Grid>

            <Grid item xs={6}
              sx={{marginTop: 2, marginBottom: 2}} 
            >
              {deleteValue ?
                <Button 
                  variant="contained" 
                  size="small" 
                  color="error" 
                  onClick={handleDelete}
                >
                  Yes, Delete This Pack!
                </Button>
                :
                <Button 
                  disabled
                  variant="contained" 
                  size="small" 
                  color="error" 
                  onClick={handleDelete}
                >Yes, Delete This Pack!
                </Button>
              }
            </Grid>
          </Grid>
          
          
        </Box>
      </Modal>
    </div>
  )
};