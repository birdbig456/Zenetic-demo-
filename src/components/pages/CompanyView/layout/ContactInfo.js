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
import AddHr from "./addButton/AddHr"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingTop: 1,
    paddingLeft: 20,
    paddingBottom: 1,
    paddingRight: 20,
  },
  PopHead: {
    fontSize: 15,
    paddingTop: 1,
    paddingBottom: 1,
    marginTop:10,
    marginLeft:5
  },
  InputPop: {
    width: "60%",
    paddingLeft: 10,
    display: "inline-block",
    paddingTop:5,
    paddingBottom:5,
    textAlign:"left",  
  },
}));
export default function ContactInfo() {
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
  const addressReducer = useSelector((state) => state.addressReducer);
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <div>
        <h3>CONTACT INFORMATION</h3>
      </div>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Primary Admin</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>scgpongsakorn@demo.scg.co.th</h4>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>HR CONTACT</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AddHr/>
        </Grid>
      </Grid>
    </div>
  );
}
