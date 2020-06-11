import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import AddWork from './addwork/AddWork'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingTop: 1,
    paddingLeft: 20,
    paddingBottom: 1,
    paddingRight: 20,
  },
}));
export default function WorkLocation() {
  const classes = useStyles();
  
  const addressReducer = useSelector((state) => state.addressReducer);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>WORK LOCATIONS</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <AddWork/>
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
