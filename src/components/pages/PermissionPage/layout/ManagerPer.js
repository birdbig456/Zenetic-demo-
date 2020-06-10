import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
export default function ManagerPer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>MANAGER PERMISSIONS</h3>
      </div>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Direct Reports’ Compensation Info</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Hidden from managers</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>Direct Reports Documents</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>All managers can view and verify</p>
        </Grid>
      </Grid>
    </div>
  );
}
