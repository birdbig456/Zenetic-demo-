import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import * as addressActions from "../../../actions/Address.action";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingTop: 1,
    paddingLeft: 20,
    paddingBottom: 1,
    paddingRight: 20,
  },
  inputName: {
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5,
    paddingRight: 100,
    marginLeft: 10,
    marginTop: 5,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "26ch",
  },
  textFieldFull: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    width: "54ch",
  },
  textFieldSm: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "12ch",
  },
}));
export default function WorkLocation() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [WorkData, setWorkData] = useState({
    name:" ",
    Address:{Code:"",Country:"",Street:"",Apt:"",city:"",state:"",zip:""},
    phone:""
  })
  const handleChange = (event) => {
    setWorkData(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addressReducer = useSelector((state) => state.addressReducer);
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>WORK LOCATIONS</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Button
              color="secondary"
              className="Button"
              onClick={handleClickOpen}
              onChange={handleChange}
            >
              <AddCircleIcon color="secondary" />
              <h5>ADD WORK LOCATION </h5>
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle id="alert-dialog-title">
                {"ADD WORK LOCATION"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      label="Name"
                      id="filled-margin-dense"
                      fullWidth
                      className={classes.textFieldFull}
                      helperText="Name your office"
                      variant="filled"
                      size="small"
                    />
                    <TextField
                      label="Code"
                      id="filled-margin-dense"
                      fullWidth
                      className={classes.textFieldFull}
                      helperText="abd123"
                      variant="filled"
                      size="small"
                    />
                    <TextField
                      label="Country"
                      id="filled-margin-dense"
                      fullWidth
                      className={classes.textFieldFull}
                      
                      variant="filled"
                      size="small"
                    />
                    <TextField
                      label="Steet Address"
                      id="filled-margin-dense"
                      className={classes.textField}
                      
                      variant="filled"
                      size="small"
                    />
                    <TextField
                      label="Apt/Suite"
                      id="filled-margin-dense"
                      className={classes.textField}
                      
                      variant="filled"
                      size="small"
                    />
                    <TextField
                      label="City"
                      id="filled-margin-dense"
                      className={classes.textField}
                      helperText="Bangkok"
                      variant="filled"
                      size="small"
                    />
                    <TextField
                      label="State"
                      id="filled-margin-dense"
                      size="small"
                      className={classes.textFieldSm}
                      
                      variant="filled"
                    />
                    <TextField
                      label="ZIP Code"
                      id="filled-margin-dense"
                      size="small"
                      className={classes.textFieldSm}
                      
                      variant="filled"
                    />
                    <TextField
                      label="Phone number"
                      id="filled-margin-dense"
                      fullWidth
                      className={classes.textFieldFull}
                      helperText="08X-XXX-XXXX"
                      variant="filled"
                      size="small"
                    />
                  </form>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={(DataWork) => dispatch(addressActions.addlocation(DataWork))}
                >
                  ADD
                </Button>
                <Button onClick={handleClose} color="secondary" autoFocus>
                  CANCLE
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>{addressReducer.name}</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Siam Cement Road Bangkok, CA 10800 </p>
        </Grid>
      </Grid>
    </div>
  );
}
