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

export default function AddCustomGearModal() {
  //Modal Stuff
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const categories = useSelector((store) => store.categoriesReducer);

  //Local State for user Select
  const [required, setRequired] = useState(false);
  const [weight, setWeight] = useState(0);
  const [pack_note, setPack_note] = useState('');
  const [gear_note, setGear_note] = useState('');
  const [name, setName] = useState('');
  const [category_id, setCategory_id] = useState(0);
  // ("user_id", "required", "weight", "pack_note", "gear_note", "name", "category_id")
  const dispatch = useDispatch();

  const handleAddGear = () => {
    dispatch({
      type: 'ADD_CUSTOM_ITEM',
      payload: {
        required,
        weight,
        pack_note,
        gear_note,
        name,
        category_id
      }
    })
  }
  

  return (
    <div>
      <Button 
          variant="contained"
          color="secondary"
          onClick={handleOpen}
        >Add Custom Gear
      </Button>
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
            <Grid item xs={6}
              sx={{marginTop: 2, marginBottom: 2}}
            >
              <TextField
                fullWidth
                variant="outlined"
                formlabel="Item Name"
                label="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></TextField>
            </Grid>

            <Grid item xs={6}
              sx={{marginTop: 2, marginBottom: 2}}
            >

            </Grid>

          </Grid>
          <p>new item add</p>

          

          <TextField
            fullWidth
            number
            variant="outlined"
            formlabel="Item Weight (oz)"
            label="Item Weight (oz)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          ></TextField>

          <TextField
            select
            fullWidth
            variant="outlined"
            formlabel="Required Item?"
            label="Required Item?"
            value={required}
            onChange={(e) => setRequired(e.target.value)}
            >
            <MenuItem
              key={0}
              value={false}
            > False 
            </MenuItem>

            <MenuItem
              key={1}
              value={true}
            > True
            </MenuItem>
          </TextField>
          
          <TextField
            select
            fullWidth
            variant="outlined"
            formlabel="Category"
            label="Select Category"
            value={category_id}
            onChange={(e) => setPackLoad(e.target.value)}
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

          <Button 
            variant="contained" 
            size="small" 
            color="success" 
            onClick={handleAddGear}
          >Add Custom Gear</Button>
          
        </Box>
      </Modal>
    </div>
  )
};