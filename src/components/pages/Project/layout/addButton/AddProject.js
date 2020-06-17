import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import * as addProjectAction from "../../../../actions/Add.Project.action";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Grid, Input } from "@material-ui/core";
export default function AddProject() {
  const [open, setOpen] = React.useState(false);
  const addProjectReducer = useSelector(({ addProjectReducer }) => addProjectReducer);
  const dispatch = useDispatch();
  const [dataProject, setDataProject] = useState({ name: "", code: ""});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="secondary" className="Button" onClick={handleClickOpen}>
        <AddCircleIcon color="secondary" />
        <h5>ADD Project</h5>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">ADD Project</DialogTitle>
        <form onSubmit={(e)=>dispatch(addProjectAction.addProject(dataProject),handleClose())} >
        <DialogContent>
          <Grid container>
          <Grid sm={1} ></Grid>
            <Grid xs={12} sm={3}>
              <h3>Name :</h3>
            </Grid>
            <Grid xs={12} sm={7}>
            <TextField
              required
              id="margin-dense"
              label="Required"
              fullWidth
              onChange={(e) => {
                setDataProject({ ...dataProject, name: e.target.value });
              }}
            />
            </Grid>
            <Grid sm={1} ></Grid>
            <Grid sm={1} ></Grid>
            <Grid xs={12} sm={3}>
              <h3>Code :</h3>
            </Grid>
            <Grid xs={12} sm={7}>
            <TextField
              required
              id="margin-dense"
              label="Required"
              fullWidth
              onChange={(e) => {
                setDataProject({ ...dataProject, code: e.target.value });
              }}
            />
            </Grid>
            <Grid sm={1} ></Grid>
            <Grid sm={1} ></Grid>
            <Grid xs={12} sm={10}>
            
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            color="primary"
          >
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
