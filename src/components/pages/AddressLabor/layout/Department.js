import React from "react";
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
import AddDepartment from "./addButton/AddDepartment";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"white",
    paddingTop:1,
    paddingLeft:20,
    paddingBottom:1,
    paddingRight:20
  },
}));
export default function Department() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(" ");
  const handleChange = event => {
    setName(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addDepartReducer = useSelector((state) => state.addDepartReducer);
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>DEPARTMENT</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AddDepartment/>
        </Grid>
      </Grid>
      <hr/>
      {addDepartReducer.map((item) => (
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                          <h4>{item.name}</h4>
            </Grid>
            <Grid item xs={12} sm={6}>
            
              <p>
                {0} Assigned People
              </p>
            
          </Grid>
          </Grid>
          ))}
    </div>
  );
}
