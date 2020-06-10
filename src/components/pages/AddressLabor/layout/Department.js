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
export default function Department() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>DEPARTMENTS</h3>
      </div>
      <hr/>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <h4>Developer</h4>
      </Grid>
      <Grid item xs={12} sm={6}>
          <p>20 Assigned People </p>
        </Grid>
      </Grid>
    </div>
  );
}
