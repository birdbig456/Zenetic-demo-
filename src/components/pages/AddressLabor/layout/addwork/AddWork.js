import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector,useDispatch } from 'react-redux'
import * as addWorkActions from '../../../../actions/Address.action'
export default function AddWork() {
  const [open, setOpen] = React.useState(false);
    const addWorkReducer = useSelector(({addWorkReducer})=>addWorkReducer)
    const dispatch = useDispatch() 
    const [dataWork, setDataWork] = useState({name:"",code:""})
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        ADD WORK LOCATION
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            onChange={e=>{setDataWork({...dataWork,name: e.target.value})}}
          />
          <TextField
            
            onChange={e=>{setDataWork({...dataWork,code: e.target.value})}}
            margin="dense"
            id="code"
            label="Code"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=>dispatch(addWorkActions.addlocation(dataWork))} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
          Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}