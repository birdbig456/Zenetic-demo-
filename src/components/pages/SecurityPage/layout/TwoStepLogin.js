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
})); // หน้านี้จะมีส่วนของ chechBox เข้ามา
export default function TwoStepLogin() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>TWO-STEP LOGIN</h3>
      </div>
      <hr/>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <h4>Two-step Login Method
</h4>
      </Grid>
      <Grid item xs={12} sm={6}>
      //    <p>None (Least Secure)</p> 
          <p>None (Email Verification (Moderately Secure))</p>
          <p>SMS Text/Authentication App (Most Secure)</p>
        </Grid>
      </Grid>
    </div>
  );
}
