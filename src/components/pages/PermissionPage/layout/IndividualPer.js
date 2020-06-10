import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
export default function IndividualPer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>INDIVIDUAL PERMISSIONS</h3>
      </div>
      <hr/>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <h4>Company Org Chart &
Directory</h4>
      </Grid>
      <Grid item xs={12} sm={6}>
          <p>Viewable to everyone</p>
        </Grid>
        <Grid item xs={12} sm={6}>
      <h4>Personal Phone Numbers
</h4>
      </Grid>
      <Grid item xs={12} sm={6}>
          <p>Viewable to everyone (individuals can
choose to hide)</p>
        </Grid>
        <Grid item xs={12} sm={6}>
      <h4>Time Off Tag on Mobile </h4>
      </Grid>
      <Grid item xs={12} sm={6}>
          <p>Viewable to everyone</p>
        </Grid>
      </Grid>
    </div>
  );
}
