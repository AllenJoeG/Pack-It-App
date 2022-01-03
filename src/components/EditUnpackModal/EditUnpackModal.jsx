import react, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//MUI
import {TextField, Box, Button, Typography, Modal} from '@mui/material';

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

export default function EditUnpackModal({tripID}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [tripName, setTripName] = useState('');
  const [tripNotes, setTripNotes] = useState('');

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
  }

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TRIP_ID',
      payload: tripID
    })
    dispatch({
      type: 'DELETE_TRIP_GEAR',
      payload: tripID
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
          
              <TextField 
                label="Name Trip"
                variant="outlined"
                value={tripName}
                onChange={e => setTripName(e.target.value)}
              >
                Yes
              </TextField>
          
            <TextField 
                label = "Trip Notes"
                variant="outlined"
                value={tripNotes}
                onChange={e => setTripNotes(e.target.value)}
              >
                No
              </TextField>
          <Button variant="contained" size="small" color="success" onClick={handleUpdate}>Update Pack!</Button>
          <Button variant="contained" size="small" color="error" onClick={handleDelete}>Delete Pack?!</Button>
          
        </Box>
      </Modal>
    </div>
  )
};