import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import person from "./iconheader/person.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "Blue",
    margin: "auto",
    color: "white",
  },
  nameperson:{
      textAlign:"center"
  }
}));

export default function Person() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} >
      <Grid    sm={1}></Grid>
        <Grid
          
          xs={12}
          sm={2}
          style={{textAlign: "center"}}
        >
          <img
            src={person}
            style={{
              marginTop:4,
              height: "auto",
              width: 140,
              border: "solid",
            }}
            alt=""
          />
        </Grid>
        <Grid  xs={12} sm={7} className={classes.nameperson}>
          <h1>Pongsakorn Panprasert</h1>
          <p>Total person  |  Date 01/04/1999 </p>
        </Grid>

        <Grid    sm={2}></Grid>
      </Grid>
    </div>
  );
}
