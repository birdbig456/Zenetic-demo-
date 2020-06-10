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
export default function AdditionalAdmin() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>ADDITIONAL ADMINISTRATORS</h3>
      </div>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Alexer Jordan</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>........ </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Alexerjordan@demo.scg.co.th</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p> Alex’s permissions apply to everyone 
in the company</p>
        </Grid>
      </Grid>
    </div>
  );
}
