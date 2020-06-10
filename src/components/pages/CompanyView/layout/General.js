import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CreateIcon from '@material-ui/icons/Create';
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
export default function General() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>GENERAL INFORMATION</h3>
      </div>
      <hr/>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <h4>Doing Business As (DBA)</h4>
      
      </Grid>
      <Grid item xs={12} sm={6}>
        <CreateIcon style={{float:"right"}} />
          <p>SCG</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <h4>Legal Name</h4>
      </Grid>
      <Grid item xs={12} sm={6}>
          <p>SCG</p>
        </Grid>
      </Grid>
    </div>
  );
}
