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
export default function GeneralTax() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>GENERAL INFORMATION</h3>
      </div>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Employer Identification Number (EIN)</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>SCG</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>SIC Code</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>70000</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>NAICS Code</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>500000</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Date Established</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>June, 1913</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>State of Incorporation</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>CA</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Business Description</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>SCG, a leading business conglomerate in theASEAN region</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Business Entity Type</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Corporations</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Company Officers</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Pongsakorn Panprasert</p>
        </Grid>
      </Grid>
    </div>
  );
}
